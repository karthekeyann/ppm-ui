import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { PaginationComponent } from '../../pagination/pagination.component';
import { ScheduleImportService } from '../schedule-import-model/schedule-import.service';

@Component({
  selector: 'app-schedule-import-list',
  templateUrl: './schedule-import-list.component.html',
  styleUrls: ['./schedule-import-list.component.css']
})
export class ScheduleImportListComponent implements OnInit {
  scheduledImports = [];
  public errorMessage;
  public order = 'name';
  public reverse: boolean = false;
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
  constructor(private service: ScheduleImportService, private router: Router) { }
  ngOnInit(): any {
    this.service.getScheduledImports().subscribe(response => {
      this.scheduledImports = response,
        this.table1_totalItems = this.scheduledImports.length;
      this.getItemsCount();
      error => this.errorMessage = <any>error
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
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
   * delete existing import task by id
   * @param id 
   */
  deleteScheduleImport(id: number) {

    if (confirm(' Are you sure, you want to Delete?')) {
      this.service.deleteSheduleImport(id).subscribe(data => {
        this.service.getScheduledImports().subscribe(response => {
          this.scheduledImports = response
        }, (err_res: any) => {
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
      this.router.navigate(['/scheduleImport']);
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
