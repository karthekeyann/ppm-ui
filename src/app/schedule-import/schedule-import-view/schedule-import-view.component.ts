import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ScheduleImportService } from '../schedule-import-model/schedule-import.service';

@Component({
  selector: 'app-schedule-import-view',
  templateUrl: './schedule-import-view.component.html',
  styleUrls: ['./schedule-import-view.component.css']
})
export class ScheduleImportViewComponent implements OnInit {
  public status: boolean;
  public data: any = {};
  public scheduleImports = [];
  public id: any;
  public freq = [];
  public day = [];
  public errorMessage;
  public errorResponse;
  /**
   * constructor
   * @param sheduleImportService
   * @param route 
   * @param http 
   */
  constructor(private service: ScheduleImportService
    , private route: ActivatedRoute) {
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
          let sts: string = entry.status;
          if (sts.toUpperCase() === 'ACTIVE') {
            this.status = true;
          } else {
            this.status = false;
          }
          this.data = entry;
          this.day = [this.data.freqPattern];
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

}
