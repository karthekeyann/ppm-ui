import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImportInprogressService } from '../import-inprogress-list/import-inprogress.service';
import { ImportPcdComponent } from '../../import-pcd/import-pcd.component';
import { ImportPcdService } from '../../import-pcd/import-pcd-service';
import { PaginationComponent } from '../../pagination/pagination.component';
import * as XLSX from 'ts-xlsx';
import { PcdData } from '../../import-pcd/pcd-data';

@Component({
  selector: 'app-import-inprogress-task',
  templateUrl: './import-inprogress-task.component.html',
  styleUrls: ['./import-inprogress-task.component.css']
})
export class ImportInprogressTaskComponent implements OnInit {

  InprogressImports = [];
  id: any;
  errorMessage: 'Failed to get Data';
  public classReference = ImportPcdComponent;
  public model: any = {};
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
  public order = 'applicationID';
  public reverse: boolean = false;
  public tableOrderOne = 'numberOne';
  public tablereverseOne: boolean = false;
  public tableOrderTwo = 'applicationIDTwo';
  public tablereverseTwo: boolean = false;
  public tableOrderThree = 'applicationIDThree';
  public tablereverseThree: boolean = false;
  public errorResponse;
  @ViewChild(ImportPcdComponent) public importpcdComponent: ImportPcdComponent;
  @ViewChild(PaginationComponent) public paginationComponent: any;
  //pagination members
  table1_cutrrentPage: number = 1;
  table1_pageSize: number = 5;
  table1_itemsPerPage: number = 5;
  table2_cutrrentPage: number = 1;
  table2_pageSize: number = 5;
  table2_itemsPerPage: number = 5;
  table3_cutrrentPage: number = 1;
  table3_pageSize: number = 5;
  table3_itemsPerPage: number = 5;
  table1_totalItems = 0;
  table1_currentPageItemsFrom = 0;
  table1_currentPageItemsTo = 0;
  table2_totalItems = 0;
  table2_currentPageItemsFrom = 0;
  table2_currentPageItemsTo = 0;
  table3_totalItems = 0;
  table3_currentPageItemsFrom = 0;
  table3_currentPageItemsTo = 0;
  //pagination
  constructor(private service: ImportInprogressService, private route: ActivatedRoute, private uploadService: ImportPcdService) { }
  ngOnInit(): any {
    this.route.params.subscribe(params => {
      this.id = params['id'];
    });

    this.failedItems = new Array();
    this.successItems = new Array();
    this.importButtonclk = true;
    const status = 'FAILED';
    this.service.getInprogressImportById(this.id).subscribe(response => {
      this.pcdSavedData = response;
      this.ImportTaskItem = this.pcdSavedData.importTaskReviewDetails;
      console.log(' this.pcdSavedData ' + JSON.stringify(this.pcdSavedData));
      this.taskName = this.pcdSavedData.name;
      this.importId = this.pcdSavedData.uuid;
      for (const item of this.ImportTaskItem) {
        if (status === (item.status).toUpperCase()) {
          this.failedItems.push(item);
          this.reloadSubmitError = true;
        } else {
          this.successItems.push(item);
        }
      }
      this.table2_totalItems = this.failedItems.length;
      this.table3_totalItems = this.successItems.length;
      this.getItemsCount();
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
    this.table2_itemsPerPage = this.table2_pageSize;
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
    this.table2_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table2_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1;
    this.table3_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table3_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1;
    if (this.table1_currentPageItemsTo > this.table1_totalItems) {
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
    if (this.table3_currentPageItemsTo > this.table3_totalItems) {
      this.table3_currentPageItemsTo = this.table3_totalItems
    }
    if (this.table3_totalItems == 0) {
      this.table3_currentPageItemsTo = 0;
      this.table3_currentPageItemsFrom = 0;
    }
  }


  public selectFile(event) {
    this.selectedFiles = event.target.files;
  }

  /**
   * this method for read uploaded .xls file
   * @param event 
   */
  public importFile(event: MouseEvent) {
    var arrayBuffer: any;
    ImportPcdComponent.importPcdCount = [];
    this.importButtonclk = undefined;
    this.currentFileUpload = this.selectedFiles.item(0); //Get the files from Upload control
    var reader: FileReader = new FileReader();
    var name = this.currentFileUpload.name;
    reader.onload = (e) => {
      arrayBuffer = reader.result;
      var data = new Uint8Array(arrayBuffer);
      var arr = new Array();
      for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
      var bstr = arr.join("");
      var workbook = XLSX.read(bstr, { type: 'binary' });

      var sheet_name_list = workbook.SheetNames; // get sheets from file
      sheet_name_list.forEach(function (y) { /* iterate through sheets */
        var row;
        var rowNum;
        var colNum;
        var range = XLSX.utils.decode_range(workbook.Sheets[y]['!ref']);// range of rows and columns
        var pcdCount = 0;
        var pcd = <PcdData>{};
        var samePcd = <PcdData>{};

        for (rowNum = range.s.r; rowNum <= range.e.r; rowNum++) {
          row = [];
          for (colNum = range.s.c; colNum <= range.e.c; colNum++) {

            var nextCell = workbook.Sheets[y][
              XLSX.utils.encode_cell({ r: rowNum, c: colNum })
            ];

            if (typeof nextCell === 'undefined') {
              row.push(void 0);
            } else {
              row.push(nextCell.w);
            }
            if (rowNum == 0 && colNum == 0) {
              var pcdValue = row[0].split("-", 2);
              pcd.pSetNumber = pcdValue[0];
              pcd.pSetName = pcdValue[1];
            }
          }
          // parameter set count
          if (rowNum > 2) {
            if (row[0] === 'Add' || row[0] === 'Change' || row[0] === 'Delete') {
              pcdCount++;
            }
          }
          pcd.importCount = pcdCount;
        }
        if (pcd.importCount !== 0) {
          if (ImportPcdComponent.importPcdCount.some(p => p.pSetNumber == pcdValue[0])) { // same pcd exist in multiple sheets
            samePcd = ImportPcdComponent.importPcdCount.find(p => p.pSetNumber == pcdValue[0]);
            if (samePcd.pSetNumber == pcdValue[0]) {
              samePcd.importCount += pcdCount;
            }
          } else {
            ImportPcdComponent.importPcdCount.push(pcd);
            this.table1_totalItems = ImportPcdComponent.importPcdCount.length;
            this.getItemsCount();
          }
        }
      });
    };
    if (this.selectedFiles[0]) {
      reader.readAsArrayBuffer(this.selectedFiles[0]);
    }
    this.selectedFiles = undefined;
  }

  /**
   * mothod for updating the existing import
   */
  reloadSubmit() {
    this.failedItems = new Array();
    this.successItems = new Array();
    this.importButtonclk = true;
    const status = 'FAILED';
    console.log('')
    this.uploadService.reloadSubmit(this.importId, this.currentFileUpload).subscribe(response => {
      this.pcdSavedData = response;
      this.ImportTaskItem = this.pcdSavedData.importTaskReviewDetails;
      console.log(' this.pcdSavedData ' + JSON.stringify(this.pcdSavedData));
      for (const item of this.ImportTaskItem) {
        if (status === (item.status).toUpperCase()) {
          this.failedItems.push(item);
          this.reloadSubmitError = true;
        } else {
          this.successItems.push(item);
        }
      }
      this.table2_totalItems = this.failedItems.length;
      this.table3_totalItems = this.successItems.length;
      this.getItemsCount();
    }, (err_res: any) => {
      this.errorResponse = JSON.stringify(err_res);
      this.errorMessage = err_res._body;
      console.log('this.errorResponse: ' + this.errorResponse);
      console.log('this.errorMessage: ' + this.errorMessage);
    });
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
      this.tablereverseOne = !this.tablereverseOne;
    }
    this.tableOrderOne = value;
  }
  setOrderTwo(value: string) {
    if (this.tableOrderTwo === value) {
      this.tablereverseTwo = !this.tablereverseTwo;
    }
    this.tableOrderTwo = value;
  }
  setOrderThree(value: string) {
    if (this.tableOrderThree === value) {
      this.tablereverseThree = !this.tablereverseThree;
    }
    this.tableOrderThree = value;
  }
}
