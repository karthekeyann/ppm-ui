import { Template } from '../schedule-export-model/Template';
import { ParameterSet } from '../schedule-export-model/parameterSets';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { PaginationComponent } from '../../pagination/pagination.component';
import { IMyDpOptions } from 'mydatepicker';
import { ScheduleExportService } from '../schedule-export-model/schedule-export.service';

@Component({
  selector: 'app-schedule-export-copy',
  templateUrl: './schedule-export-copy.component.html',
  styleUrls: ['./schedule-export-copy.component.css']
})
export class ScheduleExportCopyComponent implements OnInit {
  public status: boolean;
  public model: {};
  public scheduleExports = [];
  public data: any = {};
  public id: any;
  public freq = [];
  public day = [];
  public errors = ' Failed to retrive Data... ';
  public errorMessage;
  public message: any;
  public loading = false;
  public templateList: Template[];
  public parameterSet: ParameterSet[];
  public currTemplate = <Template>{};
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

  /**
   * injecting the schedule service
   */
  constructor(private service: ScheduleExportService, private router: Router, private route: ActivatedRoute, private http: Http) {
    this.freq = this.service.freq;
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
                }, (err) => {
                  this.errorMessage = err;
                });
                break;
              }
            }

          });
          break;
        }
      }

    }, (err) => {
      this.errorMessage = err;
    });
  }


  /**
   * pagination member
   */
  public itemsPerPage() {
    this.table1_itemsPerPage = this.table1_pageSize;
    this.getItemsCount();
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
   * get existing templates
   */
  getTemplates() {
    this.service.getTemplates().subscribe(response => { this.templateList = response }
      , (err) => {
        this.errorMessage = err;
      });
  }

  /**
   * get Parameter set from template
   * @param template
   */
  getParameterSet(template: Template) {
    this.currTemplate = template;
    this.getCurrentTemplate(this.currTemplate.uuid);
    this.table1_totalItems = this.parameterSet.length
    this.getItemsCount();
  }

  /**
   * get template by id
   * @param templateUUID
   */
  getCurrentTemplate(templateUUID: string) {
    console.log('templateUUID : ' + templateUUID);
    this.service.getParameterSet(templateUUID).subscribe(response => { this.parameterSet = response,
    console.log('pset: '+ this.parameterSet) }
      , (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
  }

  /**
   * create new schedule export
   * @param updatedFormData
   */
  createNewExport(updatedFormData) {
    this.model = {
      'name': updatedFormData.taskName,
      'templateUUID': updatedFormData.currTemplate.uuid,
      'effectiveDate': updatedFormData.startDate.formatted,
      'type': 'Export',
      'frequency': updatedFormData.frequency,
      'freqPattern': updatedFormData.dayToExport,
      'filePath': updatedFormData.fileLocation,
      'remarks': updatedFormData.remarks,
      'singleTab': updatedFormData.singleTab,
      'createdBy': '',
      'status': this.acticateSchedule(updatedFormData.status)
    };

    this.service.createSheduleExport(this.model).subscribe(data => {
      console.log(data);
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
  acticateSchedule(status: boolean): any {
    if (status) {
      return 'Active';
    } else {
      return 'InActive';
    }
  }

  /**
   * cancel the new schedule export creation
   */
  cancelCopyExport() {
    if (confirm(' Are you sure, you to Cancel? ')) {
      this.router.navigate(['/scheduleExport']);
    } else {
      this.router.navigate(['/scheduleExport/copy']);
    }
  }

  /**
   * @param selectedFrequency
   */
  getDayToExport(selectedFrequency) {
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
