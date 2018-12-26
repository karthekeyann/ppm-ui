import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ErrorHandle } from '../../error.handle';
import { HostNameUrl } from '../../hostname.url';

/**
 *  this class for service implementation of inprogress import
 *
 */
@Injectable()
export class ImportInprogressService {

  baseURL = this.hostname.hostName();

  headers = new Headers();

  constructor(private http: Http, private hostname: HostNameUrl, private errorHandler: ErrorHandle) {
    console.log('region: '+ this.hostname.getRegion());
    this.headers.append('X-region', this.hostname.getRegion());
    this.headers.append('X-user', this.hostname.loginUserName());
    this.headers.append("Authorization", "Basic " + this.hostname.getToken());
  }

  /**
   * get existing completed import task
   * 
   * @param id 
   */
  getInprogressImports(): Observable<any> {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/imports?status=inprogress';
    return this.http.get(GET_URI, {headers: this.headers}).map((response: Response) => <any>response.json()._embedded.importTaskBeanList);
  }

  /**
   * get existing import task by id
   * 
   * @param id 
   */
  getInprogressImportById(id: any) {
    const GET_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/imports'}/${id}`;
    return this.http.get(GET_URI, {headers: this.headers}).map((response: Response) => <any>response.json());
  }
  /**
   * this method for delete inprogress import
   * 
   * @param id
   */
  deleteInprogressImport(id) {
    const DELETE_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/imports'}/${id}`;
    return this.http.delete(DELETE_URI, {headers: this.headers});
  }

}
