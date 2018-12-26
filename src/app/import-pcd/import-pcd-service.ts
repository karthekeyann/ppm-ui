import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import 'rxjs/add/operator/map';
import { ErrorHandle } from '../error.handle';
import { HostNameUrl } from '../hostname.url';

@Injectable()
export class ImportPcdService {

  baseURL = this.hostname.hostName();

  headers = new Headers();

  constructor(private http: Http, private hostname: HostNameUrl, private errorHandler: ErrorHandle) {
    this.headers.append('X-region', this.hostname.getRegion());
    this.headers.append('X-user', this.hostname.loginUserName());
    this.headers.append("Authorization", "Basic " + this.hostname.getToken());
  }

  /**
   * this mothod for creating the new import
   * @param model 
   * @param file 
   */
  importSubmit(model, file: File) {
    const POST_URI = this.baseURL + 'v1/parameter/mass-maintenance/imports' + '?taskName=' + model.name + '&taskType=web';
    const formdata = new FormData();
    formdata.append('file', file);
    formdata.append('name', model.name);
    formdata.append('inputFileName', model.inputFileName);
    return this.http.post(POST_URI, formdata, { headers: this.headers }).map((response: Response) => {
      return response.json();
    });
  }

  /**
   * this mothod for updating the existing import
   * @param id 
   * @param file 
   */
  reloadSubmit(id: any, file: File) {
    const formdata = new FormData();
    formdata.append('file', file);
    const PUT_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/imports'}/${id}`;
    return this.http.put(PUT_URI, formdata, { headers: this.headers }).map((response: Response) => {
      return response.json();
    });
  }

}
