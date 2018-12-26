import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateService } from '../template-model/template.service';
import { Template } from '../template-model/template';
import { PaginationComponent } from '../../pagination/pagination.component';
import { Response } from '@angular/http';

@Component({
  selector: 'app-templates-list',
  templateUrl: './templates-list.component.html',
  styleUrls: ['./templates-list.component.css']
})
export class TemplatesListComponent implements OnInit {

  templates: Template[] = [];
  statusCode: number;
  errorMessage;
  public order = 'name';
  public reverse: boolean = false; 
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
  constructor(private router: Router, private templateService: TemplateService) { }

  ngOnInit() {
    this.getTemplates();
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
    console.log(' current page: '+ pageNumber);
    this.table1_cutrrentPage = pageNumber;
    this.getItemsCount();

  }

  public getItemsCount() {
    console.log(' cccc'+ this.table1_itemsPerPage * this.table1_cutrrentPage);
    this.table1_currentPageItemsTo = this.table1_itemsPerPage * this.table1_cutrrentPage;
    this.table1_currentPageItemsFrom = this.table1_currentPageItemsTo - this.table1_itemsPerPage + 1 ;
    if (this.table1_currentPageItemsTo> this.table1_totalItems) {
      this.table1_currentPageItemsTo = this.table1_totalItems
    }
  }
  getTemplates() {
    this.templateService.get_templates().subscribe((data: Template[]) => {
      this.templates = data;
      console.log(data);
      this.table1_totalItems = this.templates.length;
      this.getItemsCount();

    }, (err_res: any)=>{
          this.errorResponse = JSON.stringify(err_res);
          this.errorMessage = err_res._body;
          console.log('this.errorResponse: ' + this.errorResponse);
          console.log('this.errorMessage: ' + this.errorMessage);
    });
  }

  onClickUpdate(template: Template) {
    console.log(template.uuid);
    console.log(template.name);
    localStorage.removeItem("templateToUpdate");
    localStorage.setItem("templateToUpdate", JSON.stringify(template));
    this.router.navigate(['templates/edit']);
  }

  /**
 * delete existing import task by id
 * @param id 
 */
  onClickDelete(id: any) {
    this.errorMessage = null;

    if (confirm(' Are you sure, you want to Delete?')) {
      this.templateService.deleteTemplate(id).subscribe(
        res => {
          console.log('delete res: ' + res.status);
          if (res.status !== 200 && res.status !== 201) {
            console.log(' err message: ' + res.json());
          }
          this.templateService.get_templates().subscribe(response => {
            this.templates = response,
              this.getItemsCount();
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
      this.router.navigate(['/templates']);
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
