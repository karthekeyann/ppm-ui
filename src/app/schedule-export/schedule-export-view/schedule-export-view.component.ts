import { Template } from '../schedule-export-model/Template';
import { ParameterSet } from '../schedule-export-model/parameterSets';
import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaginationComponent } from '../../pagination/pagination.component';
import { ScheduleExportService } from '../schedule-export-model/schedule-export.service';

@Component({
  selector: 'app-schedule-export-view',
  templateUrl: './schedule-export-view.component.html',
  styleUrls: ['./schedule-export-view.component.css']
})
export class ScheduleExportViewComponent implements OnInit {
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
   *  constructor
   * @param service 
   * @param router 
   * @param route 
   * @param http 
   */
  constructor(private service: ScheduleExportService, private route: ActivatedRoute) {
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
          this.data = entry;
          console.log('data: ' + JSON.stringify(this.data));
          this.service.getTemplates().subscribe((res: any) => {
            this.templateList = res;
            for (const entry of this.templateList) {
              if (entry.uuid === this.data.templateUUID) {
                this.savedTemplate = entry;
                this.service.getParameterSet(entry.uuid).subscribe((res: any) => {
                  this.parameterSet = res;
                  this.table1_totalItems = this.parameterSet.length
                  this.getItemsCount();
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
   * get template list
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
   * get parameter sets 
   * @param template 
   */
  getParameterSet(template: Template) {
    this.currTemplate = template;
    console.log('template.id' + this.currTemplate);
    this.getCurrentTemplate(this.currTemplate.uuid);
    this.parameterSet = this.currTemplate.psets;
    this.table1_totalItems = this.parameterSet.length
    this.getItemsCount();
  }

  /**
   * get template by templateid
   * @param templateUUID
   */
  getCurrentTemplate(templateUUID: string) {
    console.log('templateUUID : ' + templateUUID);
    this.service.getParameterSet(templateUUID).subscribe(response => { this.parameterSet = response }
      , (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
  }

  /**
   * populate dates or day's dropdown list
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

}
