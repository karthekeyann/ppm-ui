import { Template } from '../schedule-export-model/Template';
import { ParameterSet } from '../schedule-export-model/parameterSets';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationComponent } from '../../pagination/pagination.component';
import { IMyDpOptions } from 'mydatepicker';
import { ScheduleExportService } from '../schedule-export-model/schedule-export.service';

@Component({
  selector: 'app-schedule-export-create',
  templateUrl: './schedule-export-create.component.html',
  styleUrls: ['./schedule-export-create.component.css']
})
export class ScheduleExportCreateComponent implements OnInit {
  public errorMessage: 'Failed to get templates';
  public activateShedule: boolean;
  public message: any;
  public model: any = {};
  public loading = false;
  public freq = [];
  public day = [];
  public templateList: Template[];
  public currentTemplate: {};
  public items: any = {};
  public selectedPsets = new Array<ParameterSet>();
  public currTemplate: Template;
  public template1: Template;
  public data = [];
  public order = 'applicationID';
  public reverse: boolean = false;
  public errorResponse;
  public invalidDate;
  @ViewChild(PaginationComponent) public paginationComponent: any;

  //pagination members
  table1_cutrrentPage: number = 1;
  table1_pageSize: number = 5;
  table1_itemsPerPage: number = 5;
  table1_totalItems = 0;
  table1_currentPageItemsFrom = 0;
  table1_currentPageItemsTo = 0;
  //pagination

  /**
   *  injecting shedule import service
   */
  constructor(private router: Router, private service: ScheduleExportService) {
    this.freq = this.service.freq;
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
    console.log(' cccc' + this.table1_itemsPerPage * this.table1_cutrrentPage);
    this.table1_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table1_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1;
    if (this.table1_currentPageItemsTo > this.table1_totalItems) {
      this.table1_currentPageItemsTo = this.table1_totalItems
    }
  }

  /**
   *  this method for creating new shedule Export
   * @param newSheduleExport
   */
  createScheduleExport(newSheduleExport) {
    this.model = {
      'name': newSheduleExport.taskName,
      'templateUUID': newSheduleExport.template.uuid,
      'type': 'Export',
      'effectiveDate': newSheduleExport.startDate.formatted,
      'frequency': newSheduleExport.frequency,
      'freqPattern': newSheduleExport.dayToExport,
      'filePath': newSheduleExport.fileLocation,
      'remarks': newSheduleExport.remarks,
      'taskOptions': newSheduleExport.multipleExport,
      'createdBy': '',
      'status': this.status(newSheduleExport.status)
    };
    this.loading = true;
    this.service.createSheduleExport(this.model).subscribe(data => {
      this.router.navigate(['/scheduleExport']);
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * @param status
   */
  status(status: boolean): any {
    if (status) {
      return 'Active';
    } else {
      return 'InActive';
    }
  }

  ngOnInit() {
    this.activateShedule = true;
    this.getTemplates();
  }

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  /**
   * this method for cancel the schedule create
   */
  cancelExport() {
    if (confirm(' Are you sure, you want to Cancel? ')) {
      this.router.navigate(['/scheduleExport']);
    } else {
      this.router.navigate(['/scheduleExport/create']);
    }
  }

  /**
   * get existing templates
   */
  getTemplates() {
    this.service.getTemplates().subscribe(response => {
      this.templateList = <Template[]>response
      this.table1_totalItems = this.templateList.length
      this.getItemsCount();
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
    console.log('this.templateList ' + this.templateList);
  }

  /**
   * get parameter Sets
   * @param template
   */
  getParameterSet(template: Template) {
    this.currTemplate = template;
    this.service.getParameterSet(this.currTemplate.uuid).subscribe(response => {
      this.selectedPsets = response,
        this.table1_totalItems = this.selectedPsets.length
      this.getItemsCount();
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * @param selectedFrequency
   */
  getDayToImport(selectedFrequency) {
    this.service.onSelect(selectedFrequency);
    this.day = this.service.day;
  }

  public getItems() {
    return this.paginationComponent.getItems();
  }

  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }
    this.order = value;
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
    var today = new Date();
    if(!(d >= today)) {
      this.invalidDate = 'Date should not be less than current date'
      return false; // Invalid date
    }
    if(Number.isNaN(d.getTime())){
      this.invalidDate = 'Invalid date';
      return false; // Invalid date
    } 
    this.invalidDate = null;
     d.toISOString().slice(0,10) === dateString;
     return true;
    
  }
}
