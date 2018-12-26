import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { Router, ActivatedRoute } from '@angular/router';
import { ScheduleImportService } from '../schedule-import-model/schedule-import.service';
import { IMyDpOptions } from 'mydatepicker';

@Component({
  selector: 'app-schedule-import-copy',
  templateUrl: './schedule-import-copy.component.html',
  styleUrls: ['./schedule-import-copy.component.css']
})
export class ScheduleImportCopyComponent implements OnInit {
  public status: boolean;
  public message: any;
  public model: any = {};
  public loading = false;
  public freq = [];
  public day = [];
  public data: any = {};
  public sheduleImports = [];
  public id: any;
  public errorMessage;
  public effectiveDate: {};
  public errorResponse;
  public invalidDate;

  /**
   *  injecting shedule import service
   */
  constructor(private service: ScheduleImportService, private router: Router, private route: ActivatedRoute, private http: Http) {
    this.freq = this.service.freq;
  }

  /**
   *  this method for creating new shedule import
   */
  copySheduleImport(newSheduleImport) {
    this.model = {
      'name': newSheduleImport.taskName,
      'type': 'Import',
      'effectiveDate': newSheduleImport.startDate.formatted,
      'frequency': newSheduleImport.frequency,
      'freqPattern': newSheduleImport.dayToImport,
      'filePath': newSheduleImport.fileLocation,
      'remarks': newSheduleImport.remarks,
      'createdBy': '',
      'status': this.activateSchedule(newSheduleImport.status)
    };
    this.loading = true;
    this.service.createSheduleImport(this.model).subscribe(data => {
      console.log(data);
      this.router.navigate(['/scheduleImport']);
    }, (err_res: any)=>{
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
});
  }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.service.getScheduledImports().subscribe((res: any) => {
      this.sheduleImports = res;
      for (const entry of this.sheduleImports) {
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

    }, (err_res: any)=>{
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
   * cancel the import 
   */
  cancelImport() {
    if (confirm(' Are you sure, you want to Cancel? ')) {
      this.router.navigate(['/scheduleImport']);
    } else {
      this.router.navigate(['/scheduleImport/copy']);
    }
  }

  /**
   * 
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
