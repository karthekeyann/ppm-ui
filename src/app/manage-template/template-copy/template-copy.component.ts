import { Component, OnInit, ViewChild } from '@angular/core';
import { ParameterSet } from '../template-model/ParameterSet';
import { Template } from '../template-model/template';
import { TemplateService } from '../template-model/template.service';
import { PaginationComponent } from '../../pagination/pagination.component';
import { Http } from '@angular/http';
import { Company } from '../template-model/Company';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-template-copy',
  templateUrl: './template-copy.component.html',
  styleUrls: ['./template-copy.component.css']
})
export class TemplateCopyComponent implements OnInit {

  globalParameterSets: ParameterSet[] = [];
  cacheParameterSets: ParameterSet[]= [];
  selectedParameterSets = new Array<ParameterSet>();
  statusCode: number;
  template: Template = new Template();
  public templateName;

  companies: Company[];
  public appId;
  applicationList: any[];
  
  selectedParamsNotExist: boolean;
  effectiveDatesNotExist: boolean;
  isSubmitted: boolean;
  paramSets: ParameterSet[];
  saveparamSets= new Array<ParameterSet>();
  public id: any;
  public tempPset: {};
  public saveTemplate: {};
  public errorMessage;
  public order = 'applicationID';
  public reverse: boolean = false; 
  public tableOrderOne = 'number';
  public tableReverseOne: boolean = false; 
  public pset: {};
  public errorResponse;
  public invalidDate;
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
  constructor(private templateService: TemplateService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.getApplicationName();
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });
  
    this.getParameterSetsByUUID(this.id);
    
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
    console.log(' current page: '+ pageNumber);
    this.table1_cutrrentPage = pageNumber;
    this.table2_cutrrentPage = pageNumber;
    this.getItemsCount();
  }

  public getItemsCount() {
    console.log(' cccc'+ this.table1_itemsPerPage * this.table1_cutrrentPage);
    this.table1_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table1_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1 ;
    this.table2_currentPageItemsTo = this.table2_itemsPerPage * this.table2_cutrrentPage;
    this.table2_currentPageItemsFrom = this.table2_currentPageItemsTo - this.table2_itemsPerPage + 1 ;
    if (this.table1_currentPageItemsTo> this.table1_totalItems) {
      this.table1_currentPageItemsTo = this.table1_totalItems
    }
    if (this.table1_totalItems == 0) {
      this.table1_currentPageItemsTo = 0;
      this.table1_currentPageItemsFrom = 0;
    }
    if (this.table2_currentPageItemsTo> this.table1_totalItems) {
      this.table2_currentPageItemsTo = this.table1_totalItems
    }
    if (this.table2_totalItems == 0) {
      this.table2_currentPageItemsTo = 0;
      this.table2_currentPageItemsFrom = 0;
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
  
  /**
   * Get parameter sets
   * @param psets 
   */
  getPsets(psets: ParameterSet[]) {
    let company: Company[];
    for (let p of psets) {
      // this.appId = p.applicationID;
      this.tempPset = {};
      this.templateService.get_companyDetailsByParameterId(p.number).subscribe(res => {
        company = res,
          this.tempPset = {
            applicationID: p.applicationID,
            number: p.number,
            name: p.name,
            companies: company,
            companyID: p.companyID,
            effectiveDate: p.effectiveDate,
            createdBy: 'user'
          }
        this.selectedParameterSets.push(this.tempPset);
        this.table2_totalItems = this.selectedParameterSets.length;
        this.getItemsCount();
        console.log('pset : '+ this.selectedParameterSets);
      },(error)=> {
        this.errorMessage = error;
      });
    }
  }

  /**
   * Get parametersets by template uuid
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
   * Get ParameterSets by ApplicationID
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
        this,this.getItemsCount();
      }, (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
  }

   
  addParameterSet(paramSet: ParameterSet) {
    paramSet.effectiveDate = "";
    //Get the company Data based on parameterId
    this.getCompanyDetailsByParameter(paramSet.number,paramSet);
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
    this.selectedParameterSets.splice(i, 1);
    this.table2_totalItems = this.selectedParameterSets.length
    this.getItemsCount();
  }
  
  /**
   * Get company details by Parameter number
   * @param paramId 
   * @param paramSet 
   */
  getCompanyDetailsByParameter(paramId: any, paramSet: ParameterSet) {
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
    },(err_res: any)=> {
         this.errorResponse = JSON.stringify(err_res);
          this.errorMessage = err_res._body;
          console.log('this.errorResponse: ' + this.errorResponse);
          console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * Create new template
   */
 create_Template() {
    this.isSubmitted = true;
    this.saveTemplate = {};
    for(let item of this.selectedParameterSets) {
      console.log('item : '+ JSON.stringify(item));
      let pset = {
        applicationID: item.applicationID,
        name: item.name,
        number: item.number,
        companyID: item.companyID,
        effectiveDate: item.effectiveDate,
        createdBy: item.createdBy
      };
      this.saveparamSets.push(pset);
    }
    this.template.createdBy = "user";
     this.saveTemplate = {
      name: this.template.name,
      createdBy: this.template.createdBy,
      psets: this.saveparamSets
    };
    
    console.log("template" +JSON.stringify(this.saveTemplate))
    this.templateService.create_template(this.saveTemplate).subscribe(
      (response) => {
        this.statusCode = response.status;
        this.router.navigate(['/templates'])
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

  setOrderOne(value: string) {
    if (this.tableOrderOne === value) {
      this.tableReverseOne = !this.tableReverseOne;
    }
    this.tableOrderOne = value;
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
    // if(!(d >= today)) {
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
