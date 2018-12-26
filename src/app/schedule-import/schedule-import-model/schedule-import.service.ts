import { Http, Response, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ErrorHandle } from '../../error.handle';
import { HostNameUrl } from '../../hostname.url';

/**
 *  this class for service implementation of shedule import view/create
 *
 */
@Injectable()
export class ScheduleImportService {

  freq = ['ONLY ONCE', 'DAILY', 'WEEKLY', 'MONTHLY'];
  day: any = [];
  weeks: any = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  days: any = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18',
    '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30','31', 'MONTH END'];

  baseURL = this.hostname.hostName();

  headers = new Headers();

  constructor(private http: Http, private hostname: HostNameUrl, private errorHandler: ErrorHandle) {
    this.headers.append('X-region', this.hostname.getRegion());
    this.headers.append('X-user', this.hostname.loginUserName());
    this.headers.append("Authorization", "Basic " + this.hostname.getToken());
  }

  /**
   *  get list of scedule imports
   * 
   */
  getScheduledImports(): Observable<any> {
    const GET_URI = this.baseURL + 'v1/parameter/mass-maintenance/schedules?type=import';
    return this.http.get(GET_URI, { headers: this.headers }).map((response: Response) => <any>response.json()._embedded.scheduleBeanList);
  }

  /**
   * This method for create new shedule import
   *
   * @param model
   * @returns response
   */
  createSheduleImport(model: any) {
    const POST_URI = this.baseURL + 'v1/parameter/mass-maintenance/schedules';
    console.log(' start Create Service...' + JSON.stringify(model));
    return this.http.post(POST_URI, model, { headers: this.headers });
  }

  /**
   * This method for update shedule import
   * 
   * @param model
   * @param id
   */
  updateSheduleImport(model: any, id: number) {
    const PUT_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/schedules'}/${id}`;
    return this.http.put(PUT_URI, model, { headers: this.headers });
  }

  /**
   * this method for delete existing SheduleImport
   * 
   * @param id
   */
  deleteSheduleImport(id) {
    const DELETE_URI = `${this.baseURL + 'v1/parameter/mass-maintenance/schedules'}/${id}`;
    return this.http.delete(DELETE_URI, { headers: this.headers });
  }

  onSelect(selectedFrequency: string) {
    if (selectedFrequency === 'WEEKLY') {
      this.day = this.weeks;
    } else if (selectedFrequency === 'MONTHLY') {
      this.day = this.days;
    } else {
      this.day = null;
    }
  }

}
