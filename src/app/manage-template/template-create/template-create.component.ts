
import { Component, OnInit } from '@angular/core';
import { ParameterSet } from '../template-model/ParameterSet';
import { Company } from '../template-model/Company';
import { Template } from '../template-model/template';
import { TemplateService } from '../template-model/template.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-template-create',
  templateUrl: './template-create.component.html',
  styleUrls: ['./template-create.component.css']
})
export class TemplateCreateComponent implements OnInit {

  globalParameterSets: ParameterSet[] = [];
  cacheParameterSets = [];
  selectedParameterSets = new Array<ParameterSet>();
  companies: Company[];
  statusCode: number;
  public appId;
  template: Template = new Template();
  applicationList: any[];

  selectedParamsNotExist: boolean;
  effectiveDatesNotExist: boolean;
  isSubmitted: boolean;
  errorResponse;
  // jsonResp : object;
  paramSets: ParameterSet[];
  saveparamSets = new Array<ParameterSet>();
  errorMessage;
  dissableSaveBtn = true;
  invalidName;
  public order = 'applicationID';
  public reverse: boolean = false;
  public tableOrderOne = 'number';
  public tableReverseOne: boolean = false;
  pset = {};
  pSets = new Array<ParameterSet>();
  invalidDate;
  public rowId;
  //pagination members
  table1_cutrrentPage: number = 1;
  table1_pageSize: number = 5;
  table1_itemsPerPage: number = 5;
  table2_cutrrentPage: number = 1;
  table2_pageSize: number = 5;
  table2_itemsPerPage: number = 5;
  table1_totalItems = 0;
  table1_currentPageItemsFrom = 0;
  table1_currentPageItemsTo = 0;
  table2_totalItems = 0;
  table2_currentPageItemsFrom = 0;
  table2_currentPageItemsTo = 0;
  //pagination
  constructor(private templateService: TemplateService, private router: Router) {
  }

  ngOnInit() {
    this.getApplicationName();
  }

  /**
   * pagination member
   */
  public itemsPerPage() {
    this.table1_itemsPerPage = this.table1_pageSize;
    this.table2_itemsPerPage = this.table2_pageSize;
    this.getItemsCount();

  }

  /**
   * pagination member
   * @param pageNumber
   */
  public cutrrentPage(pageNumber: any) {
    this.table1_cutrrentPage = pageNumber;
    this.table2_cutrrentPage = pageNumber;
    this.getItemsCount();
  }

  public getItemsCount() {
    this.table1_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table1_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1;
    if (this.table1_currentPageItemsTo > this.table1_totalItems) {
      this.table1_currentPageItemsTo = this.table1_totalItems
    }
    this.table2_currentPageItemsTo = this.table2_itemsPerPage * this.table2_cutrrentPage;
    this.table2_currentPageItemsFrom = this.table2_currentPageItemsTo - this.table2_itemsPerPage + 1;
    if (this.table2_currentPageItemsTo > this.table2_totalItems) {
      this.table2_currentPageItemsTo = this.table2_totalItems
    }
    if (this.table1_totalItems == 0) {
      this.table1_currentPageItemsTo = 0;
      this.table1_currentPageItemsFrom = 0;
    }
    if (this.table2_totalItems == 0) {
      this.table2_currentPageItemsTo = 0;
      this.table2_currentPageItemsFrom = 0;
    }
  }

  public getApplicationName() {
    this.applicationList = [];
    this.templateService.get_Applications().subscribe((data) => {
      this.applicationList = data.json();
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }
  onApplicationChange() {
    this.cacheParameterSets = new Array();
    this.getParameterSetsByApplicationId(this.appId);
  }

  /**
   * Get ParameterSets by applicationID
   * @param appId 
   */
  getParameterSetsByApplicationId(appId) {
    var data;
    var paramSetArray = new Array();
    this.cacheParameterSets = [];
    this.templateService.get_parameterSetsByApplicationId(appId).subscribe(
      (res) => {
        data = res.json(),
          paramSetArray = data;
        console.log('paramsets ' + JSON.stringify(paramSetArray));
        for (var i = 0; i < paramSetArray.length; i++) {
          var paramSet = {
            number: paramSetArray[i].number,
            name: paramSetArray[i].name,
          };
          this.cacheParameterSets.push(paramSet);
        }
        this.setOrderOne('number');
        this.table1_totalItems = this.cacheParameterSets.length;
        this.getItemsCount();
      }, (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
  }
  addParameterSet(paramSet: any) {
    this.getCompanyDetailsByParameter(paramSet.number, paramSet);
  }

  deletePset(index) {
    const i: number = (index) + (this.table1_cutrrentPage - 1) * this.table1_pageSize;
    this.cacheParameterSets.splice(i, 1);
    this.table1_totalItems = this.cacheParameterSets.length
    this.getItemsCount();
  }

  addPset(pSet) {
    let paramter = {
      number: pSet.number,
      name: pSet.name
    }
    this.cacheParameterSets.push(paramter);
  }

  deleteParameterSet(index) {
    const i: number = (index) + (this.table2_cutrrentPage - 1) * this.table2_pageSize;
    console.log('index ' + i);
    console.log('index ' + index);
    this.selectedParameterSets.splice(i, 1);
    this.table2_totalItems = this.selectedParameterSets.length
    this.getItemsCount();
  }

  /**
   * Get company details by parameterSet number
   * @param paramId 
   * @param paramSet 
   */
  getCompanyDetailsByParameter(paramId: any, paramSet: any) {
    this.companies = [];
    this.templateService.get_companyDetailsByParameterId(paramId).subscribe((data: Company[]) => {
      this.companies = data;
      this.pset = {
        "applicationID": this.appId,
        "name": paramSet.name,
        "number": paramSet.number,
        "companies": this.companies,
        "createdBy": 'user'
      };

      this.selectedParameterSets.push(this.pset);
      this.table2_totalItems = this.selectedParameterSets.length;
      this.getItemsCount();
      this.selectedParamsNotExist = false;
      this.dissableSaveBtn = false;
    }, (err_res: any) => {
      this.dissableSaveBtn = true;
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * create new Template
   */
  createTemplate(): any {
    this.pSets = new Array();
    this.isSubmitted = true;
    for (let item of this.selectedParameterSets) {
      this.pset = {
        applicationID: item.applicationID,
        name: item.name,
        number: item.number,
        companyID: item.companyID,
        effectiveDate: item.effectiveDate,
        createdBy: item.createdBy
      }
      this.pSets.push(this.pset);
    }
    console.log('saved psets: ' + JSON.stringify(this.pSets));
    this.template.createdBy = "user";
    this.template.psets = this.pSets;
    console.log("template" + JSON.stringify(this.template))
    this.templateService.create_template(this.template).subscribe(
      (response) => {
        this.statusCode = response.status;
        this.router.navigate(['/templates'])
      }, (err_res: any) => {
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
  setOrderOne(value: string) {
    if (this.tableOrderOne === value) {
      this.tableReverseOne = !this.tableReverseOne;
    }
    this.tableOrderOne = value;
  }

  getIndex(i) {
    this.rowId = i; 
   }
   
  onChange(effectiveDate) {
    if(this.isValidDate(effectiveDate)) {
      return this.invalidDate = '';
    } else {
      return this.invalidDate;
    }
  }

   isValidDate(dateString) {
    console.log('date invalid' +dateString );
    var regEx = /^\d{4}-\d{2}-\d{2}$/;
    if(!dateString.match(regEx)){
      this.invalidDate = 'Invalid date';
      return false;  // Invalid format
    } 
    var d = new Date(dateString);
    // var today = new Date();
    // if(!(d > today)) {
    //   this.invalidDate = 'Date should not be less than current date'
    //   return false; // Invalid date
    // }
    if(Number.isNaN(d.getTime())){
      this.invalidDate = 'Invalid date';
      return false; // Invalid date
    } 
    this.invalidDate = null;
     d.toISOString().slice(0,10) === dateString;
     return true;
    
  }
}
