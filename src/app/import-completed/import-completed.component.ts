import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ImportCompletedService } from './import-completed.service';
import { PaginationComponent } from '../pagination/pagination.component';

@Component({
  selector: 'app-import-completed',
  templateUrl: './import-completed.component.html',
  styleUrls: ['./import-completed.component.css']
})
export class ImportCompletedComponent implements OnInit {

  public id: any;
  public onClickContinueBtn: boolean;
  public errorMessage: 'Failed to get Data';
  public selectedImport: any;
  public uuid = "";
  public model: any = {};
  public completedImports = [];
  public taskName: any;
  public failedItems = [];
  public successItems = [];
  public ImportTaskItem = [];
  public pcdSavedData: any;
  public selectedFiles: FileList;
  public importButtonclk = true;
  public currentFileUpload: File;
  public importId: any;
  public submitError: boolean = false;
  public reloadSubmitError: boolean = false;
  public continueBtnDissable = true;
  public order = 'applicationID';
  public reverse: boolean = false; 
  public tableOrderOne = 'number';
  public tableReverseOne: boolean = false; 
  public errorResponse;

  @ViewChild(PaginationComponent) public paginationComponent: any;
  //pagination members
  table1_cutrrentPage: number = 1;
  table1_pageSize: number = 5;
  table1_itemsPerPage: number = 5;
  table2_cutrrentPage: number = 1;
  table2_pageSize: number = 5;
  table2_itemsPerPage: number = 5;
  table1_totalItems = 0;
  table1_currentPageItemsFrom = 0;
  table1_currentPageItemsTo = 0;
  table2_totalItems = 0;
  table2_currentPageItemsFrom = 0;
  table2_currentPageItemsTo = 0;
  //pagination
  constructor(private service: ImportCompletedService, private router: Router) { }

  ngOnInit(): any {
    this.service.getCompletedImports().subscribe(response => {this.completedImports = response,
      this.table1_totalItems = this.completedImports.length;
      this.getItemsCount();
    }, (err_res: any)=>{
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
    this.table2_itemsPerPage = this.table2_pageSize;
    this.getItemsCount();

  }

  /**
   * pagination member
   * @param pageNumber
   */
  public cutrrentPage(pageNumber: any) {
    console.log(' current page: '+ pageNumber);
    this.table1_cutrrentPage = pageNumber;
    this.table2_cutrrentPage = pageNumber;
    this.getItemsCount();

  }

  public getItemsCount() {
    console.log(' cccc'+ this.table1_itemsPerPage * this.table1_cutrrentPage);
    this.table1_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table1_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1 ;
    this.table2_currentPageItemsTo = this.table2_itemsPerPage * this.table2_cutrrentPage;
    this.table2_currentPageItemsFrom = this.table2_currentPageItemsTo - this.table2_itemsPerPage + 1;
    if (this.table1_currentPageItemsTo> this.table1_totalItems) {
      this.table1_currentPageItemsTo = this.table1_totalItems
    }
    if (this.table1_totalItems == 0) {
      this.table1_currentPageItemsTo = 0;
      this.table1_currentPageItemsFrom = 0;
    }
    if (this.table2_currentPageItemsTo > this.table2_totalItems) {
      this.table2_currentPageItemsTo = this.table2_totalItems
    }
    if (this.table2_totalItems == 0) {
      this.table2_currentPageItemsTo = 0;
      this.table2_currentPageItemsFrom = 0;
    }
  }
  
  /**
   * delete import task by id
   * @param id 
   */
  deleteCompltedImport(id: number) {
    if (confirm(' Are you sure, you want to Delete?')) {
      this.service.deleteCompletedImport(id).subscribe(
        res => {
          this.service.getCompletedImports().subscribe(response => { this.completedImports = response }
            , (err_res: any)=>{
              this.errorResponse = JSON.stringify(err_res);
              this.errorMessage = err_res._body;
              this.table1_totalItems = this.completedImports.length;
              this.getItemsCount();
              console.log('this.errorResponse: ' + this.errorResponse);
              console.log('this.errorMessage: ' + this.errorMessage);
        });
        }, (err_res: any)=>{
          this.errorResponse = JSON.stringify(err_res);
          this.errorMessage = err_res._body;
          console.log('this.errorResponse: ' + this.errorResponse);
          console.log('this.errorMessage: ' + this.errorMessage);
    });
    } else {
      this.router.navigate(['/importcompleted']);
    }
  }

  /**
   * get selected import from listing screen
   * @param item 
   */
  onSelectionChange(item) {
    this.continueBtnDissable = false;
    this.selectedImport = item;
    this.uuid = this.selectedImport.uuid;
    console.log('selected import' + this.selectedImport);
  }

  /**
   * get all completed import details by id
   */
  getCompletedImportDetails(id: any) {
    this.onClickContinueBtn = true;
    this.successItems = new Array();
    this.service.getCompletedImportById(id).subscribe(response => {
      this.pcdSavedData = response;
      this.ImportTaskItem = this.pcdSavedData.importTaskReviewDetails;
      console.log(' this.pcdSavedData ' + JSON.stringify(this.pcdSavedData));
      this.taskName = this.pcdSavedData.name;
      for (const item of this.ImportTaskItem) {
        this.successItems.push(item);
      }
      this.table2_totalItems = this.successItems.length;
      this.getItemsCount();
    }, (err_res: any)=>{
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
});
  }

  onClickBack() {
    this.onClickContinueBtn = false;
    this.router.navigate(['/importcompleted']);
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

  setOrderOne(value: string) {
    if (this.tableOrderOne === value) {
      this.tableReverseOne = !this.tableReverseOne;
    }
    this.tableOrderOne = value;
  }

}
