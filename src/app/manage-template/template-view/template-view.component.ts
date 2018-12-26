import { Component, OnInit } from '@angular/core';
import { ParameterSet } from '../template-model/ParameterSet';
import { Template } from '../template-model/template';
import { TemplateService } from '../template-model/template.service';
import { Company } from '../template-model/Company';
import { ActivatedRoute } from '@angular/router';
import { Application } from '../template-model/Application';

@Component({
  selector: 'app-template-view',
  templateUrl: './template-view.component.html',
  styleUrls: ['./template-view.component.css']
})
export class TemplateViewComponent implements OnInit {

  globalParameterSets: ParameterSet[] = [];
  cacheParameterSets: ParameterSet[]= [];
  selectedParameterSets = new Array<ParameterSet>();
  statusCode: number;
  template: Template = new Template();
  public templateName;
  public errorResponse;

  companies: Company[];
  public id: any;
  applicationList: Application[];
  
  selectedParamsNotExist: boolean;
  effectiveDatesNotExist: boolean;
  isSubmitted: boolean;
  // jsonResp : object;
  paramSets: ParameterSet[];
  saveparamSets= new Array<ParameterSet>();
  public application: Application = {};
  public tempPset: {};
  public saveTemplate: {};
  public appId;
  public errorMessage;
  public order = 'applicationID';
  public reverse: boolean = false; 
  //pagination members
  table1_cutrrentPage: number = 1;
  table1_pageSize: number = 5;
  table1_itemsPerPage: number = 5;
  table1_totalItems = 0;
  table1_currentPageItemsFrom = 0;
  table1_currentPageItemsTo = 0;
  //pagination
  constructor(private templateService: TemplateService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getApplicationName();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
    console.log('uuid: '+ this.id);
    this.getParameterSetsByUUID(this.id);
  }

  /**
   * pagination member
   */
  public itemsPerPage() {
    this.table1_itemsPerPage = this.table1_pageSize;
    this.getItemsCount();
  }

  /**
   * pagination member
   * @param pageNumber
   */
  public cutrrentPage(pageNumber: any) {
    console.log(' current page: ' + pageNumber);
    this.table1_cutrrentPage = pageNumber;
    this.getItemsCount();
  }

  public getItemsCount() {
    console.log(' cccc'+ this.table1_itemsPerPage * this.table1_cutrrentPage);
    this.table1_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table1_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1 ;
    if (this.table1_currentPageItemsTo> this.table1_totalItems) {
      this.table1_currentPageItemsTo = this.table1_totalItems
    }
  }
  
  /**
   * Get Applications
   */
  public getApplicationName() {
    this.applicationList = [];
    this.templateService.get_Applications().subscribe((data) => {
      this.applicationList = data.json();
    });
  }

  onApplicationChange() {
    this.getParameterSetsByApplicationId(this.appId);
  } 

  getPsets(psets: ParameterSet[]) {
    let company: Company[];
    for (let p of psets) {
      console.log('appId : '+p.applicationID);
      this.appId = p.applicationID;
      this.tempPset = {};
      this.templateService.get_companyDetailsByParameterId(p.number).subscribe(res => {
        company = res,
          this.tempPset = {
            applicationID: p.applicationID,
            number: p.number,
            name: p.name,
            companies: company,
            companyID: p.companyID,
            effectiveDate: p.effectiveDate
          }
        this.selectedParameterSets.push(this.tempPset);
        this.table1_totalItems = this.selectedParameterSets.length;
        this.getItemsCount();
        console.log('pset : '+ this.selectedParameterSets);
      },(err_res)=> {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
    });
    }
  }

  /**
   * Get parameterSets by template uuid
   * @param uuid 
   */
  getParameterSetsByUUID(uuid: any) {
    this.templateService.get_parameterSets(uuid).subscribe(
      (response) => {
        this.template = response;
        console.log('template: '+JSON.stringify(response));
        this.getPsets(response.psets);
        // this.onApplicationChange();
        this.statusCode = response.status;
      },(err_res)=> {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * Get parameterSets by appicationID
   * @param appId 
   */
  getParameterSetsByApplicationId(appId) {
    var paramSetArray = new Array();
    this.cacheParameterSets = [];
    this.templateService.get_parameterSetsByApplicationId(appId).subscribe(
    // (data) => {
      (res) => { paramSetArray = res.json();
      for (var i = 0; i < paramSetArray.length; i++) {
        var paramSet = new ParameterSet();
        paramSet.number = paramSetArray[i].number;
        paramSet.name = paramSetArray[i].name;
        this.cacheParameterSets.push(paramSet);
      }
      this.table1_totalItems = this.cacheParameterSets.length;
      this.getItemsCount();
      console.log(this.cacheParameterSets.length);
    },(err_res)=> {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
  });
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
  }
}
