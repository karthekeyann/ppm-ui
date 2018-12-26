import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { ErrorHandle } from '../../error.handle';
import { HostNameUrl } from '../../hostname.url';

@Injectable()
export class ScheduleExportService {
public freq = ['ONLY ONCE', 'DAILY', 'WEEKLY', 'MONTHLY'];
public day: any = [];
public weeks: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
public days: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', 
    '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', 'MONTH END'];

  baseURL = this.hostname.hostName();
  
  headers = new Headers();

  /**
   *  constructor
   * 
   * @param http 
   */
  constructor(private http: Http, private hostname: HostNameUrl, private errorHandler: ErrorHandle) {
    this.headers.append('X-region', this.hostname.getRegion());
    this.headers.append('X-user', this.hostname.loginUserName());
    this.headers.append("Authorization", "Basic " + this.hostname.getToken());
  }

  /**
   *  get list of scedule exports
   * 
   */
  getScheduledExports(): Observable<any> {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/schedules?type=export';
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => <any>response.json()._embedded.scheduleBeanList);
  }

  /**
   *  get list of templates
   * 
   */
  getTemplates(): Observable<any> {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/templates';
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => <any>response.json()._embedded.templateBeanList);
  }

  /**
   *  get parameter sets by template id
   * 
   * @param id  
   */
  getParameterSet(id): Observable<any> {
     const GET_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/templates'}/${id}`;
     return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => response.json().psets);
     
  }

  /**
   *  create new schedule export
   * 
   * @param model  
   */
  createSheduleExport(model: any) {
    const POST_URI = this.baseURL + 'v1/parameter/mass-maintenance/schedules';
    return this.http.post(POST_URI, model, { headers: this.headers });
  }

  /**
   * update exsting schedule export by id
   * 
   * @param model  
   * @param id 
   */
  updateScheduleExport(model: any, id: any) {
    const PUT_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/schedules'}/${id}`;
    return this.http.put(PUT_URI, model, { headers: this.headers });
  }

  /**
   * delete existing Shedule export by id
   * 
   * @param id
   */
  deleteScheduleExport(id) {
    const DELETE_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/schedules'}/${id}`;
    return this.http.delete(DELETE_URI, { headers: this.headers });
  }

  /**
   * populate dates or day's by selectedFrequency
   * @param selectedFrequency 
   */
  onSelect(selectedFrequency) {
    if (selectedFrequency === 'WEEKLY') {
      this.day = this.weeks;
    } else if (selectedFrequency === 'MONTHLY') {
      this.day = this.days;
    } else {
      this.day = null;
    }
  }
}
