import { Component, OnInit,Input,OnChanges,AfterContentInit, } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppStore } from "../store/model/app-store";
import { ExportPCD } from "../store/model/exportPCD.model";
// import { ADD_EXPORTDATA} from '../store/reducers/exportPCD.reducer';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit  {
  @Input() appli:string;
  @Input('exportTableList')public exportTableList:any;
  // filteredItems: Product[];
   filteredItems: any[];
   model: any = {id:5};
   pages = 1;
   pageSize = 5;
   pageNumber = 0;
   currentIndex = 1;
   // items: Product[];
   items:any[];
   pagesIndex: Array<number>;
   pageStart = 1;
   inputName = '';
   public exportTable:any;
  public exportTableData: Observable<ExportPCD>;
  constructor( public store: Store<AppStore>) {
    // console.log(' value1 ' + this.model);
      // this.filteredItems = productList;
       this.filteredItems = this.exportTableList;
      // this.initz();
   }
   public ngOnInit(){
     console.log(this.exportTableList);
    this.exportTableData = this.store.select('exportPCD');    
    this.exportTableData.subscribe(
      (val) => {
          if (!val) {
              return;
          } else{
            this.exportTable = val;
          }
        });
        this.initz();
        // console.log("fgdddddjf");
        // console.log(this.exportTable);  
   }
  public page() {
    this.pageItem(this.model);
  }
  pageItem(item: any) {
    this.pageSize = item.id;
    console.log(' value2 ' + this.pageSize);
    //this.filteredItems = productList;
     this.filteredItems = this.exportTableList;
    this.initz();
  }

  // sorting
  key = 'name'; // set default
  reverse = false;
  sort(key) {
    this.key = key;
    this.reverse = !this.reverse;
  }

public initz() {
         this.filteredItems = this.exportTableList;
         this.currentIndex = 1;
         this.pageStart = 1;
         this.pages = 4;
         if (this.filteredItems!=undefined){
         this.pageNumber = parseInt('' + (this.filteredItems.length / this.pageSize));
         if (this.filteredItems.length % this.pageSize !== 0) {
            this.pageNumber ++;
         }
        }
         if (this.pageNumber  < this.pages) {
               this.pages =  this.pageNumber;
         }
         this.refreshItems();
         console.log('this.pageNumber:' + this.pageNumber);
   }

   FilterByName() {
      this.filteredItems = [];
      if (this.inputName !== '') {
            // productList.forEach(element => {
               this.exportTableList.forEach(element => {
                if (element.name.toUpperCase().indexOf(this.inputName.toUpperCase()) >= 0) {
                  this.filteredItems.push(element);
               }
            });
      } else {
        // this.filteredItems = productList;
        this.filteredItems = this.exportTableList;
      }
      console.log(this.filteredItems);
      this.initz();
   }
   fillArray(): any {
      const obj = new Array();
      for (let index = this.pageStart; index < this.pageStart + this.pages; index ++) {
                  obj.push(index);
      }
      return obj;
   }
 refreshItems() {
               this.filteredItems = this.exportTableList;
               this.items = this.filteredItems.slice((this.currentIndex - 1) * this.pageSize, (this.currentIndex) * this.pageSize);
               this.pagesIndex =  this.fillArray();
   }
   prevPage() {
      if (this.currentIndex > 1) {
         this.currentIndex --;
      }
      if (this.currentIndex < this.pageStart) {
         this.pageStart = this.currentIndex;
      }
      this.refreshItems();
   }
   nextPage() {
      if (this.currentIndex < this.pageNumber) {
            this.currentIndex ++;
      }
      if (this.currentIndex >= (this.pageStart + this.pages)) {
         this.pageStart = this.currentIndex - this.pages + 1;
      }

      this.refreshItems();
   }
    setPage(index: number) {
         this.currentIndex = index;
         this.refreshItems();
    }

    public ngOnChanges(){
      this.filteredItems = this.exportTableList;
      console.log(this.exportTableList);
      console.log(this.filteredItems);

    }

    public getItems(){
      return this.items;
    }

}
