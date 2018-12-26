import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ScheduleImportService } from '../schedule-import-model/schedule-import.service';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-schedule-import-edit',
  templateUrl: './schedule-import-edit.component.html',
  styleUrls: ['./schedule-import-edit.component.css']
})
export class ScheduleImportEditComponent implements OnInit {
  public status: boolean;
  public model: { 'name': any; 'type': any; 'effectiveDate': any; 'frequency': any; 'freqPattern': any; 'filePath': any; 'remarks': any; 'modifiedBy': any; 'status': any; };

  public data: any = {};
  public scheduleImports = [];
  public id: any;
  public freq = [];
  public day = [];
  public errorMessage;
  public effectiveDate: {};
  public errorResponse;
  public invalidDate;

  /**
   * constructor
   * @param sheduleImportService 
   * @param router 
   * @param route 
   * @param http 
   */
  constructor(private service: ScheduleImportService, private router: Router, private route: ActivatedRoute) {
    this.freq = this.service.freq;
  }
  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.service.getScheduledImports().subscribe((res: any) => {
      this.scheduleImports = res;
      for (const entry of this.scheduleImports) {
        if (entry.uuid === this.id) {
          this.getDayToImport(entry.frequency);
          let sts: string = entry.status;
          if (sts.toUpperCase() === 'ACTIVE') {
            this.status = true;
          } else {
            this.status = false;
          }
          this.setDate(entry.effectiveDate);
          this.data = entry;
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
   * update the existing schedule import
   * @param updatedFormData 
   */
  updateImport(updatedFormData) {
    this.model = {

      'name': updatedFormData.taskName,
      'type': 'Import',
      'effectiveDate': updatedFormData.startDate.formatted,
      'frequency': updatedFormData.frequency,
      'freqPattern': updatedFormData.dayToImport,
      // 'dayToImport': updatedFormData.dayToImport,
      'filePath': updatedFormData.fileLocation,
      'remarks': updatedFormData.remarks,
      'modifiedBy': '',
      'status': this.activateSchedule(updatedFormData.status)
    };

    this.service.updateSheduleImport(this.model, this.id).subscribe(data => {
      console.log(data);
      this.router.navigate(['/scheduleImport']);
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  /**
   * cancel the schedule updating
   */
  cancelEditImport() {
    if (confirm(' Are you sure, you to Cancel? ')) {
      this.router.navigate(['/scheduleImport']);
    } else {
      this.router.navigate(['/scheduleImport/edit']);
    }
  }

  /**
   * populate the day's or dates as dropdown list
   * @param selectedFrequency 
   */
  getDayToImport(selectedFrequency) {
    this.service.onSelect(selectedFrequency);
    this.day = this.service.day;
  }

  /**
   * schedule status
   * @param status 
   */
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
