import { Injectable } from '@angular/core';
// import { Http, HttpHeaders } from '@angular/common/http';
import { Http, Headers } from '@angular/http';
import { HostNameUrl } from '../hostname.url';
import { ErrorHandle } from '../error.handle';

@Injectable()
export class LoginService {

  authenticated = false;

  headers = new Headers();

  constructor(private http: Http, private hostname: HostNameUrl, private errorHandler: ErrorHandle) {

  }
  
  authenticate(credentials, callback, cal2) {
    this.headers= new Headers();
    this.headers.append('X-region', this.hostname.getRegion());
    this.headers.append('Content-Type', 'application/json');
    this.headers.append('X-user', this.hostname.loginUserName());
    this.headers.append("Authorization", "Basic " + this.hostname.getToken());
    // this.headers = this.headers.append("Content-Type", "application/x-www-form-urlencoded");
    const GET_URI = this.hostname.hostName() + 'cft/hogan/platform/ppm/services/user';
        this.http.get(GET_URI, {headers: this.headers, withCredentials: true}, ).subscribe(response => {
            if (response) {
                console.log(response);
                this.authenticated = true;
            } else {
                this.authenticated = false;
            }
            return callback && callback();
      }, err_res=>{
        return cal2(err_res);
      });

    }

}