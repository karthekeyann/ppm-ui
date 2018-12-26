import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMyDpOptions } from 'mydatepicker';
import { ScheduleImportService } from '../schedule-import-model/schedule-import.service';
/**
 *  This is angular component for create shedule import
 */
@Component({
  selector: 'app-schedule-import-create',
  templateUrl: './schedule-import-create.component.html',
  styleUrls: ['./schedule-import-create.component.css'],
  // styles:[
  //   `
  //      :host >>> my-date-picker >>> .mydpicon {
  //         font-size: 14px !important;
  //         font-weight: 500 !important;
  //         color: #55595c !important;
  //       }
  //      :host >>> my-date-picker >>> .btnpicker {
  //         width: 35px;
  //         background: #d1d4d7;
  //       }
  //   `
  // ]
})
export class ScheduleImportCreateComponent implements OnInit {
  public activateShedule: boolean;
  public message: any;
  public model: any = {};
  public loading = false;
  public freq = [];
  public day = [];
  public errorMessage;
  public errorResponse;
  public invalidDate;

  /**
   *  injecting shedule import service
   */
  constructor(private router: Router, private service: ScheduleImportService) {
    this.freq = this.service.freq;
  }

  /**
   *  this method for creating new shedule import
   */
  createImport(newSheduleImport) {
    this.model = {
      'name': newSheduleImport.taskName,
      'effectiveDate': newSheduleImport.startDate.formatted,
      'type': 'Import',
      'frequency': newSheduleImport.frequency,
      'freqPattern': newSheduleImport.dayToImport,
      // 'dayToImport': newSheduleImport.dayToImport,
      'filePath': newSheduleImport.fileLocation,
      'remarks': newSheduleImport.remarks,
      'status': this.activateSchedule(newSheduleImport.status),
      'createdBy': newSheduleImport.createdBy
    };
    this.loading = true;
    this.service.createSheduleImport(this.model).subscribe(data => {
      console.log(data);
      this.router.navigate(['/scheduleImport']);
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  ngOnInit() {
    this.activateShedule = true;
    this.freq = this.service.freq;
  }
  public myDatePickerOptions: IMyDpOptions = {
    // other options...
    dateFormat: 'yyyy-mm-dd',
  };

  cancelImport() {
    if (confirm(' Are you sure, you want to Cancel? ')) {
      this.router.navigate(['/scheduleImport']);
    } else {
      this.router.navigate(['/scheduleImport/create']);
    }
  }

  getDayToImport(selectedFrequency) {
    this.service.onSelect(selectedFrequency);
    this.day = this.service.day;
  }

  activateSchedule(status: boolean): any {
    if (status) {
      return 'Active';
    } else {
      return 'InActive';
    }
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
