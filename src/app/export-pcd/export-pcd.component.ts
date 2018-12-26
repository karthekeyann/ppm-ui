import { ExportPcdService } from './export-pcd.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../store/model/app-store';
import { ExportPCD } from '../store/model/exportPCD.model';
import { ADD_EXPORTDATA } from '../store/reducers/exportPCD.reducer';
import { Template } from './Template';
import { ParameterSet } from './parameterSets';
import { PaginationComponent } from '../pagination/pagination.component';
import { Company } from './Company';
import { SpinnerService } from 'angular-spinners';

@Component({
  selector: 'app-export-pcd',
  templateUrl: './export-pcd.component.html',
  styleUrls: ['./export-pcd.component.css']
})
export class ExportPcdComponent implements OnInit {

  private HTTP_GET_APPLICATION_JSON_FILE = '../../assets/utils/application.json';
  private HTTP_GET_FOUNDATION_JSON_FILE = '../../assets/utils/foundation.json';
  private HTTP_GET_CARD_JSON_FILE = '../../assets/utils/card.json';
  private HTTP_GET_LOAN_JSON_FILE = '../../assets/utils/loan.json';
  private HTTP_GET_CUSTOMER_JSON_FILE = '../../assets/utils/customer.json';
  private HTTP_GET_DEPOSITE_JSON_FILE = '../../assets/utils/deposit.json';

  public changedId: any;
  public combineExcelTab: {};
  public selectedName: any;
  public paramSet: any;
  public applicationList: any[];
  public parameterSetList: any[];
  public applicationName: any;
  public exportData: any = {};
  public model: any = {};
  public singleTab: boolean = false;
  public errorMessage;
  public templateList: Template[];
  public currTemplate: Template;
  public parameterSet: ParameterSet[];
  public selectedAll: any;
  public exportPcdForm: FormGroup;
  public buttonchecked: boolean = false;
  public existingTemplateStatus: boolean;
  public application;
  public exportTable: any = [];
  public selectedPsets = new Array<ParameterSet>();
  public exportTableData: Observable<ExportPCD>;
  public paramSets = [];
  public pSets: ParameterSet[];
  public pSet: {};
  public companies: Company[];
  public editRowId;
  public selectedTemplatePset = new Array<ParameterSet>();
  public selectedTemplate: Template;
  public tempPset: {};
  public uuid;
  public applicationID;
  public isRecordSelected;
  public order = 'applicationID';
  public reverse: boolean = false; 
  public appDropdownEnable;
  public errorResponse;
  public spinnerActive;
  public appId;
  public invalidDate;
  public rowId;
  
  @ViewChild(PaginationComponent) public paginationComponent: any;
    //pagination members
    table1_cutrrentPage: number = 1;
    table1_pageSize: number = 5;
    table1_itemsPerPage: number = 5;
    table1_totalItems = 0;
    table1_currentPageItemsFrom = 0;
    table1_currentPageItemsTo = 0;
    //pagination
  constructor(
    private http: Http, private spinner: SpinnerService,
    private exportService: ExportPcdService,
    public store: Store<AppStore>) {
  }

  public ngOnInit() {
    this.spinnerActive = false;
    this.onLoadDisable();
    this.getApplicationName();
    this.exportTableData = this.store.select('exportPCD');
    console.log(this.exportTableData);
    this.exportTableData.subscribe(
      (val) => {
        if (!val) {
          return;
        } else {
          this.exportTable = val;
        }
      });
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
    console.log(' current page: '+ pageNumber);
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
    if (this.table1_totalItems == 0) {
      this.table1_currentPageItemsTo = 0;
      this.table1_currentPageItemsFrom = 0;
    }
  }
  
  public getTemplates() {
    this.exportService.getTemplates().subscribe(response => {
      this.templateList = response
    }, (err_res: any)=>{
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
});
  }

  getPsets(psets: ParameterSet[]) {
    let company: Company[];
    for (let p of psets) {
      this.tempPset = {};
      this.exportService.getcompanyDetailsByParameterId(p.number).subscribe(res => {
        company = res,
          this.tempPset = {
            applicationID: p.applicationID,
            number: p.number,
            name: p.name,
            companies: company,
            companyID: p.companyID
          }
      this.spinner.hide('mySpinner');
      this.spinnerActive = false;
        this.selectedPsets.push(this.tempPset);
        this.table1_totalItems = this.selectedPsets.length
        this.getItemsCount();
      }, (err_res: any)=>{
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
  });
    }
  }

  public getParameterSet(uuid: any) {
    let appDrpDwn = (<HTMLInputElement>document.getElementById('applicationDrpdwn'));
    appDrpDwn.disabled = false;
    this.spinner.show('mySpinner');
    this.spinnerActive = true;
    this.selectedPsets = [];
    this.appDropdownEnable = true;
    this.exportService.getParameterSet(uuid).subscribe(response => {
      this.selectedTemplatePset = response, this.getPsets(this.selectedTemplatePset);
    }, (err) => {
      this.errorMessage = err;
    });
  }

  public getCompaniesByParamId(paramId: any) {
    this.spinner.show('mySpinner');
    this.spinnerActive = true;
    this.companies = new Array();
    this.selectId(paramId);
    this.exportService.getcompanyDetailsByParameterId(paramId).subscribe(res => {
      this.companies = res, this.addExport(1),
      this.spinnerActive = false,
      this.spinner.hide('mySpinner');
    }, (err_res: any)=>{
      this.errorResponse = JSON.stringify(err_res);
      if(!err_res._body) {
        this.errorMessage = err_res._body;
      } else {
        this.errorMessage = 'System error occurred. Please try again or contact system administrator.';
      } 
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
});
  }

  public getCompaniesByParamName(paramName: any) {
    this.spinner.show('mySpinner');
    this.spinnerActive = true;
    this.companies = new Array();
    this.selectName(paramName);
    this.exportService.getcompanyDetailsByParameterId(this.changedId).subscribe(res => {
      this.companies = res, this.addExport(2),
      this.spinnerActive = false,
      this.spinner.hide('mySpinner');
    }, (err_res: any)=>{
      this.errorResponse = JSON.stringify(err_res);
      if(!err_res._body) {
        this.errorMessage = err_res._body;
      } else {
        this.errorMessage = 'System error occurred. Please try again or contact system administrator.';
      } 
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
});
  }


  // Reading Application Property File to display values in Application DropDown
  public getApplicationName() {
    this.applicationList = [];
    this.exportService.get_Applications().subscribe((data) => {
      this.applicationList = data.json();
    });
  }

  public appNameChange(applicationName) {
      if (this.application === undefined) {
      let paramDrpDwn = (<HTMLInputElement>document.getElementById('parameterNumDrpdwn'));
      let paramSetDrpDwn = (<HTMLInputElement>document.getElementById('parameterNameDrpdwn'));
      paramDrpDwn.disabled = false;
      paramSetDrpDwn.disabled = false;
    }
    if (applicationName === 'Foundation') {
      this.applicationID = 'FSS';
      this.exportData.number = undefined;
      this.exportData.name = undefined;
      this.parameterSetList = null;
      this.getParameterSetsByApplicationId(this.applicationID);
    } else if (applicationName === 'Deposit') {
      this.parameterSetList = null;
      this.applicationID = 'IDS';
      this.getParameterSetsByApplicationId(this.applicationID);
    }
  }

  // Based on Application Name Reading Corresponding PCD Property file
  // public appNameChange(applicationName) {
  //   if (this.application === undefined) {
  //     let paramDrpDwn = (<HTMLInputElement>document.getElementById('parameterNumDrpdwn'));
  //     let paramSetDrpDwn = (<HTMLInputElement>document.getElementById('parameterNameDrpdwn'));
  //     paramDrpDwn.disabled = false;
  //     paramSetDrpDwn.disabled = false;
  //   }
  //   if (applicationName === 'Foundation') {
  //     this.applicationID = 'FSS';
  //     this.exportData.number = undefined;
  //     this.exportData.name = undefined;
  //     this.parameterSetList = null;
  //     this.getJSONData(applicationName, this.HTTP_GET_FOUNDATION_JSON_FILE);
  //   } else if (applicationName === 'Card') {
  //     this.parameterSetList = null;
  //     this.getJSONData(applicationName, this.HTTP_GET_CARD_JSON_FILE);
  //   } else if (applicationName === 'Loan') {
  //     this.parameterSetList = null;
  //     this.getJSONData(applicationName, this.HTTP_GET_LOAN_JSON_FILE);
  //   } else if (applicationName === 'Customer') {
  //     this.parameterSetList = null;
  //     this.getJSONData(applicationName, this.HTTP_GET_CUSTOMER_JSON_FILE);
  //   } else if (applicationName === 'Deposit') {
  //     this.applicationID = 'IDS';
  //     this.exportData.number = undefined;
  //     this.exportData.name = undefined;
  //     this.parameterSetList = null;
  //     this.getJSONData(applicationName, this.HTTP_GET_DEPOSITE_JSON_FILE);
  //   }
  // }

  /**
   * Get ParameterSets by ApplicationID
   * @param appId 
   */
  getParameterSetsByApplicationId(appId) {
    var data;
    var paramSetArray = new Array();
    this.parameterSetList = [];
    this.exportService.get_parameterSetsByApplicationId(appId).subscribe(
      (res) => {
      data = res.json(),
        paramSetArray = data;
        for (var i = 0; i < paramSetArray.length; i++) {
          let paramSet = {
            number: paramSetArray[i].number,
            name: paramSetArray[i].name,
          };
          this.parameterSetList.push(paramSet);
          this.paramSet = this.parameterSetList;
        }
      }, (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        if(!err_res._body) {
          this.errorMessage = err_res._body;
        } else {
          this.errorMessage = 'System error occurred. Please try again or contact system administrator.';
        } 
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
  }

  // Reading JSON Property Files(PCD) to display Values in Parameter Name and Number dropdown
  public getJSONData(name: string, url: string): any {
    let filePath = this.http.get(url).subscribe((data) => {
      this.parameterSetList = [];
      let fileContentJSON = JSON.parse(data['_body']);

      if (fileContentJSON) {
        let owner = fileContentJSON.owner;
        this.paramSet = fileContentJSON.ParamSet;
        this.parameterSetList = this.paramSet;

        // for (let id in this.paramSet) {
        //   let paramNum = id;
        //   let paramName = this.paramSet[id].name;
        //   let paramSetDetail = {
        //     id: paramNum,
        //     name: paramName
        //   };
        //   this.parameterSetList.push(paramSetDetail);
        //   console.log(this.parameterSetList);
        // }

      }
    });
  }

  //Based on Parameter Number, Parameter Name Change
  public selectId(selectedId) {
    for (let ind in this.paramSet) {
      if (this.paramSet[ind].number == selectedId) {
        this.selectedName = this.paramSet[ind].name;
        return this.selectedName;

      }
    }
  }

  //Based on Parameter Name, Parameter Number Change
  public selectName(name) {
    for (let ind in this.paramSet) {
      if (name === this.paramSet[ind].name) {
        this.changedId = this.paramSet[ind].number;
        return this.changedId;
      }
    }
  }

  //Based on Radio Button Selection DropDown Enable Disbale Condition 
  public enableDisbale(radioButton) {
    this.errorMessage = null;
    this.selectedPsets = [];
    this.uuid = {};
    this.getItemsCount();
    let exportSelect = (<HTMLInputElement>document.getElementById('existingDrpdwn'));
    let appDrpDwn = (<HTMLInputElement>document.getElementById('applicationDrpdwn'));
    let paramDrpDwn = (<HTMLInputElement>document.getElementById('parameterNumDrpdwn'));
    let paramSetDrpDwn = (<HTMLInputElement>document.getElementById('parameterNameDrpdwn'));
    if (radioButton === 1) {
      exportSelect.disabled = true;
      appDrpDwn.disabled = false;
      paramDrpDwn.disabled = true;
      paramSetDrpDwn.disabled = true;
      this.templateList = [];
      
      if (this.application === undefined) {
        paramDrpDwn.disabled = true;
        paramSetDrpDwn.disabled = true;
      } else {
        paramDrpDwn.disabled = false;
        paramSetDrpDwn.disabled = false;
      }
    }
    else if (radioButton === 2) {
      appDrpDwn.disabled = true;
      paramDrpDwn.disabled = true;
      paramSetDrpDwn.disabled = true;
      exportSelect.disabled = false;
      this.exportData.application = null;
      this.exportData.number = null;
      this.exportData.name = null;
      if (this.application === undefined) {
        paramDrpDwn.disabled = true;
        paramSetDrpDwn.disabled = true;
      } else {
        paramDrpDwn.disabled = false;
        paramSetDrpDwn.disabled = false;
      }
    }
  }

  //Based on Radio Button Selection DropDown Enable Disbale Condition 
  public onLoadDisable() {
    let exportSelect = (<HTMLInputElement>document.getElementById('existingDrpdwn'));
    let appDrpDwn = (<HTMLInputElement>document.getElementById('applicationDrpdwn'));
    let paramDrpDwn = (<HTMLInputElement>document.getElementById('parameterNumDrpdwn'));
    let paramSetDrpDwn = (<HTMLInputElement>document.getElementById('parameterNameDrpdwn'));
    exportSelect.disabled = true;
    appDrpDwn.disabled = true;
    paramDrpDwn.disabled = true;
    paramSetDrpDwn.disabled = true;
  }

  // Based on Application, Parameter Set dropdown change Values Push into Table
  public addExport(data) {
    if ((this.exportData.application != undefined) && (this.exportData.number != undefined || this.exportData.name != undefined)) {
      if (data == 0) {
        this.exportData.application = this.appNameChange(this.exportData.application);
      }
      else if (data == 1) {
        this.exportData.name = this.selectId(this.exportData.number);
      } else if (data == 2) {
        this.exportData.number = this.selectName(this.exportData.name);
      }

      // this.getCompaniesByParamId(this.exportData.number);
      let exportDatas: ParameterSet = {
        applicationID: this.applicationID,
        number: this.exportData.number,
        name: this.exportData.name,
        companies: this.companies
      }
      this.selectedPsets.push(exportDatas);
      this.table1_totalItems = this.selectedPsets.length
      this.getItemsCount();
      console.log(' selected psets: ' + this.selectedPsets);
      this.store.dispatch({ type: ADD_EXPORTDATA, payload: this.exportTable });
    }
  }

  // Delete Particular Row In Table
  deleteFieldValue(index) {
    const i: number = (index) + (this.table1_cutrrentPage - 1) * this.table1_pageSize;
    this.selectedPsets.splice(i, 1);

    this.table1_totalItems = this.selectedPsets.length
    this.getItemsCount();
  }

  // SelectAll  Checkbox Table Header
  public selectAll() {
    this.isRecordSelected = true;
    this.pSets = new Array();
    for (let i = 0; i < this.selectedPsets.length; i++) {
      this.selectedPsets[i].selected = this.selectedAll;
      this.pSet = {
        'applicationID': this.selectedPsets[i].applicationID,
        'number': this.selectedPsets[i].number,
        'name': this.selectedPsets[i].name,
        'companyID': this.selectedPsets[i].companyID,
        'effectiveDate': this.selectedPsets[i].effectiveDate
      };
      this.pSets.push(this.pSet);
      console.log(' selected all: ' + JSON.stringify(this.pSets));

    }
  }

  // Select Particular Checkbox, Inside Table
  public checkIfAllSelected(i: any) {
    this.isRecordSelected = true;
    this.pSets = new Array();
    this.selectedAll = this.selectedPsets.every(function (item: any) {
      return item.selected == true;
    });
    for (let item of this.selectedPsets) {
      if (item.selected) {
        this.pSet = {
          'applicationID': item.applicationID,
          'number': item.number,
          'name': item.name,
          'companyID': item.companyID,
          'effectiveDate': item.effectiveDate
        };
        this.pSets.push(this.pSet);
        console.log(' selected pSets : ' + JSON.stringify(this.pSets))
      }
    }
  }

  onChange(effectiveDate) {
    if (this.isRecordSelected) {
      this.pSets = new Array();
      this.selectedAll = this.selectedPsets.every(function (item: any) {
        return item.selected == true;
      });
      for (let item of this.selectedPsets) {
        if (item.selected) {
          this.pSet = {
            'applicationID': item.applicationID,
            'number': item.number,
            'name': item.name,
            'companyID': item.companyID,
            'effectiveDate': item.effectiveDate
          };
          this.pSets.push(this.pSet);
          console.log(' selected pSets : ' + JSON.stringify(this.pSets))
        }
      }
    }
    if(this.isValidDate(effectiveDate)) {
      return this.invalidDate = '';
    } else {
      return this.invalidDate;
    }
  }

  // Export Button Click
  public exportExcelData(formData) {
    this.combineExcelTab = {
      "singleTab": formData.singleTab,
      "psets": this.pSets
    };
    this.exportService.exportData(JSON.stringify(this.combineExcelTab)).subscribe(res => {
      res
    }, (err_res: any)=>{
      this.errorResponse = JSON.stringify(err_res);
      if(!err_res._body) {
        this.errorMessage = err_res._body;
      } else {
        this.errorMessage = 'System error occurred. Please try again or contact system administrator.';
      } 
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
});
  }

  public getItems() {
    return this.paginationComponent.getItems();
  }

  editParamSet(i) {
    this.editRowId = i;
  }

  setOrder(value: string) {
    if (this.order === value) {
    this.reverse = !this.reverse;
    }
    this.order = value;
    } 

    // onDateChange(effectiveDate) {
    //   if(this.isValidDate(effectiveDate)) {
    //     return this.invalidDate = '';
    //   } else {
    //     return this.invalidDate;
    //   }
    // }

    getIndex(i) {
      this.rowId = i; 
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
