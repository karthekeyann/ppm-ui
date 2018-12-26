import { Injectable } from '@angular/core';
import { Http, Response, ResponseContentType, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { Template } from './Template';
import * as FileSaver from 'file-saver';

import { ErrorHandle } from '../error.handle';
import { HostNameUrl } from '../hostname.url';


@Injectable()
export class ExportPcdService {

  baseURL = this.hostname.hostName();

  headers = new Headers();

  constructor(private http: Http, private hostname: HostNameUrl, private errorHandler: ErrorHandle) {
    this.headers.append('X-region', this.hostname.getRegion());
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-user', this.hostname.loginUserName());
    this.headers.append("Authorization", "Basic " + this.hostname.getToken());

  }
/**
* Method to GET Existing Tempalte List
*
*/
  getTemplates(): Observable<Template[]> {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/templates';
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => <Template[]>response.json()._embedded.templateBeanList);
  }

/**
* Method to GET Parameter sets by template id
*
*/
  getParameterSet(id: any) {
    const GET_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/templates'}/${id}`;
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => response.json().psets);
  }

/**
* Method to Export PCD
*
*/
  exportData(paramSets) {
    const POST_URI = this.baseURL + 'v1/parameter/mass-maintenance/exports';
    return this.http.post(POST_URI, paramSets, { headers: this.headers, responseType: ResponseContentType.Blob }).map(this.extractData);
  }

/**
* Method to GET Company Details By Parameter ID
*
*/
  getcompanyDetailsByParameterId(id: number): Observable<any> {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/parameters/' + id + '/companies';
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => <any>response.json());
  }

/**
* Method to download the .xlsx file
*
*/
  private extractData(res: Response) {
    console.log(' response : ' + res);
    FileSaver.saveAs(new Blob([res.blob()], { type: 'application/vnd.ms-excel' }), "download.xls");
  }

  /**
  * get the Applications 
  * 
  */
 get_Applications() {
  const get_Applications_uri = this.baseURL + 'v1/parameter/mass-maintenance/applications/';
 return this.http.get(get_Applications_uri, { headers: this.headers });
}

 /**
 * Get parameter sets by applicationID 
 * 
 */
 get_parameterSetsByApplicationId(appId) {
   const get_paramSet_uri= this.baseURL + 'v1/parameter/mass-maintenance/applications/' + appId + '/parameters'
   return this.http.get(get_paramSet_uri, { headers: this.headers });
 }

}