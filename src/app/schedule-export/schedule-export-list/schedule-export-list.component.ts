import { PaginationComponent } from '../../pagination/pagination.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ScheduleExportService } from '../schedule-export-model/schedule-export.service';

/**
 *  schedule-export-list component
 */
@Component({
  selector: 'app-schedule-export-list',
  templateUrl: './schedule-export-list.component.html',
  styleUrls: ['./schedule-export-list.component.css']
})
export class ScheduleExportListComponent implements OnInit {
  public order = 'name';
  public reverse: boolean = false;
  public scheduledExports = [];
  public errorMessage;
  public errorResponse;
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
   * @param service ScheduleExportService
   * @param router Router
   */
  constructor(private service: ScheduleExportService, private router: Router) { }
  ngOnInit(): any {
    this.service.getScheduledExports().subscribe(response => {
      this.scheduledExports = response,
        this.table1_totalItems = this.scheduledExports.length;
      this.getItemsCount();
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
    console.log(' Shedules ' + this.scheduledExports);
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
   *  delete existing sxhedule export by id
   * @param id 
   */
  deleteSheduleExport(id: number) {

    if (confirm(' Are you sure, you want to Delete?')) {
      this.service.deleteScheduleExport(id).subscribe(data => {
        this.service.getScheduledExports().subscribe(response => { this.scheduledExports = response }
          , (err_res: any) => {
            this.errorResponse = JSON.stringify(err_res);
            this.errorMessage = err_res._body;
            console.log('this.errorResponse: ' + this.errorResponse);
            console.log('this.errorMessage: ' + this.errorMessage);
          });
      }, (err_res: any) => {
        this.errorResponse = JSON.stringify(err_res);
        this.errorMessage = err_res._body;
        console.log('this.errorResponse: ' + this.errorResponse);
        console.log('this.errorMessage: ' + this.errorMessage);
      });
    } else {
      this.router.navigate(['/scheduleExport']);
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
}
