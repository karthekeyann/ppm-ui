import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

/**
 * Error Handle file 
 */
@Injectable()
export class ErrorHandle {


    public handleError(error: any, message: any) {
        console.log('handleError()...' + message + ' '+ error);
        if (error.status === 500) {
          console.log('Internal Server Error: ' + error.status);
          return Observable.throw(message);
        }else if (error.status === 0) {
          console.log('Internal Server Error: ' + error.status);
          return Observable.throw('Network Connection Failed');
        }else if (error.status === 400) {
          console.log('Internal Server Error: ' + error.status);
          return Observable.throw(message);
        }else if (error.status === 403) {
          console.log('Internal Server Error: ' + error.status);
          return Observable.throw(message);
        }else if (error.status === 503) {
          console.log('Internal Server Error: ' + error.status);
          return Observable.throw('Service Unavailable');
        } else if (error.status === 404) {
          console.log('Internal Server Error: ' + error.status);
          return Observable.throw('Not Found '+ error.status);
        }else if (error.status === 401) {
          console.log('Internal Server Error: ' + error.status);
          return Observable.throw('UnAuthorized Error '+ error.status);
        }
         else {
          console.log('Server Error: ' + error.status);
          return Observable.throw(new Error(error.status));
        }
      }
  }