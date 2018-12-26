import { Template } from '../schedule-export-model/Template';
import { ParameterSet } from '../schedule-export-model/parameterSets';
import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from '../../pagination/pagination.component';
import { IMyDpOptions } from 'mydatepicker';
import { ScheduleExportService } from '../schedule-export-model/schedule-export.service';

@Component({
  selector: 'app-schedule-export-edit',
  templateUrl: './schedule-export-edit.component.html',
  styleUrls: ['./schedule-export-edit.component.css']
})
export class ScheduleExportEditComponent implements OnInit {
  public model: {};
  public scheduleExports = [];
  public data: any = {};
  public id: any;
  public freq = [];
  public day = [];
  public errors = ' Failed to retrive Data... ';
  public errorMessage;
  public status: boolean;
  public message: any;
  public loading = false;
  public templateList: Template[];
  public parameterSet: ParameterSet[];
  public currTemplate: Template;
  public savedTemplate: Template;
  public order = 'applicationID';
  public reverse: boolean = false;
  public errorResponse;
  public invalidDate;
  public effectiveDate: {};

  // public taskOptions: boolean;
  @ViewChild(PaginationComponent) public paginationComponent: any;

  //pagination members
  table1_cutrrentPage: number = 1;
  table1_pageSize: number = 5;
  table1_itemsPerPage: number = 5;
  table1_totalItems = 0;
  table1_currentPageItemsFrom = 0;
  table1_currentPageItemsTo = 0;
  //pagination

  constructor(private service: ScheduleExportService, private router: Router, private route: ActivatedRoute, private http: Http) {
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

  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  setDate(date: any): void {
    console.log(' data.effDate: ' + date);
    const [year, month, day] = date.split("-")
    this.effectiveDate = {
      date: {
        year: year,
        month: month,
        day: day
      }
    }
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.service.getScheduledExports().subscribe((res: any) => {
      this.scheduleExports = res;
      for (const entry of this.scheduleExports) {
        if (entry.uuid === this.id) {
          this.getDayToExport(entry.frequency);
          var sts: string = entry.status;
          if (sts.toUpperCase() === 'ACTIVE') {
            this.status = true;
          } else {
            this.status = false;
          }
          // var tab: string = entry.singleTab;
          // if (tab.toUpperCase() === 'FALSE') {
          //   this.taskOptions = false;
          // } else {
          //   this.taskOptions = true;
          // }
          this.setDate(entry.effectiveDate);
          this.data = entry;
          this.service.getTemplates().subscribe((res: any) => {
            this.templateList = res;
            for (const entry of this.templateList) {
              if (entry.uuid === this.data.templateUUID) {
                this.savedTemplate = entry;
                this.service.getParameterSet(entry.uuid).subscribe((res: any) => {
                  this.parameterSet = res;
                  this.table1_totalItems = this.parameterSet.length
                  this.getItemsCount();
                }, (err_res: any) => {
                  this.errorResponse = JSON.stringify(err_res);
                  this.errorMessage = err_res._body;
                  console.log('this.errorResponse: ' + this.errorResponse);
                  console.log('this.errorMessage: ' + this.errorMessage);
                });
                break;
              }
            }
          });
          break;
        }
      }

    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * this method for getting existing templates 
   */
  getTemplates() {
    this.service.getTemplates().subscribe(response => { this.templateList = response }
      , (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
  }

  /**
   * @param template
   */
  getParameterSet(template: Template) {
    this.currTemplate = template;
    this.getCurrentTemplate(this.currTemplate.uuid);
    this.table1_totalItems = this.parameterSet.length
    this.getItemsCount();
  }

  /**
   * @param templateUUID
   */
  getCurrentTemplate(templateUUID: string) {
    this.service.getParameterSet(templateUUID).subscribe(response => { this.parameterSet = response }
      , (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
  }

  /**
   * this method for edit the scheduled export
   * @param updatedFormData
   */
  updateExport(updatedFormData) {
    this.model = {
      'name': updatedFormData.taskName,
      'templateUUID': updatedFormData.currTemplate.uuid,
      'type': 'Export',
      'effectiveDate': updatedFormData.startDate.formatted,
      'frequency': updatedFormData.frequency,
      'freqPattern': updatedFormData.dayToExport,
      'filePath': updatedFormData.fileLocation,
      'remarks': updatedFormData.remarks,
      'singleTab': updatedFormData.singleTab,
      'modifiedBy': '',
      'status': this.activateShedule(updatedFormData.status)
    };
    console.log('model : ' + JSON.stringify(this.model));
    this.service.updateScheduleExport(this.model, this.id).subscribe(data => {
      this.router.navigate(['/scheduleExport']);
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * this method for cancel the schedule
   */
  cancelEditExport() {
    if (confirm(' Are you sure, you to Cancel? ')) {
      this.router.navigate(['/scheduleExport']);
    } else {
      this.router.navigate(['/scheduleExport/edit']);
    }
  }

  /**
   * @param selectedFrequency
   */
  getDayToExport(selectedFrequency) {
    this.service.onSelect(selectedFrequency);
    this.day = this.service.day;
  }

  /**
   * @param statusOnChange
   */
  activateShedule(statusOnChange: boolean): any {
    if (statusOnChange) {
      return 'Active';
    } else {
      return 'InActive';
    }
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
