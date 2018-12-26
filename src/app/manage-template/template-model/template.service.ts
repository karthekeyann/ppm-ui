import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HostNameUrl } from '../../hostname.url';
import { ErrorHandle } from '../../error.handle';

@Injectable()
export class TemplateService {

  baseURL;

  headers = new Headers();

  constructor(private http: Http, private hostname: HostNameUrl, private errorHandler: ErrorHandle) {
    // this.hostname = new HostNameUrl();
    this.headers.append('X-region', this.hostname.getRegion());
    this.headers.append('X-user', this.hostname.loginUserName());
    this.headers.append("Authorization", "Basic " + this.hostname.getToken());
    this.baseURL = this.hostname.hostName();
  }

  /**
   *  get list of templates
   */
  get_templates() {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/templates';
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => <any>response.json()._embedded.templateBeanList);
  }

  /**
   *  get list of parameterSets
   */
  get_parameterSets(uuid: any): Observable<any> {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/templates';
    return this.http.get(`${GET_URI}/${uuid}`, { headers: this.headers }).map((response: Response) => <any>response.json());
  }

  /**
   * Get Company Details by param ID
   * 
   * @param id
   */
  get_companyDetailsByParameterId(id: any) {
    // Replace with API URL to get company details 
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/parameters/' + id + '/companies';
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => <any>response.json());
  }

  /**
   *  Create Template
   */
  create_template(template) {
    const POST_URI = this.baseURL + 'v1/parameter/mass-maintenance/templates';
    return this.http.post(POST_URI, template, { headers: this.headers });
  }

  /**
   *  Update Template
   */
  update_template(template: any, uuid: any) {
    const PUT_URI = this.baseURL + 'v1/parameter/mass-maintenance/templates';
    return this.http.put(`${PUT_URI}/${uuid}`, template, { headers: this.headers });
  }

  /**
  * Delete Tempalte
  * 
  * @param id
  */
  deleteTemplate(id) {
    const DELETE_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/templates'}/${id}`;
    return this.http.delete(DELETE_URI, { headers: this.headers });
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
