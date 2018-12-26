import { Injectable } from '@angular/core';
// import { Subject, Observable } from 'rxjs';

/**
* Host Name File 
*/
@Injectable()
export class HostNameUrl {

    // myMethod$: Observable<any>;
    // private myMethodSubject = new Subject<any>();
    hostNameTest = 'http://cscvappnor088.fsg.amer.csc.com:9000/';
    hostNameQA = 'http://cscvappnor090.fsg.amer.csc.com:9000/';
    hostNamePROD = 'http://cscvappnor090.fsg.amer.csc.com:9000/';
    hostNameUri;
    login: boolean;
    userName;
    reg;
    private token;

    constructor() {
        // this.myMethod$ = this.myMethodSubject.asObservable();
    }
    public getHostName(env: any) {
        if (env === 'Test') {
             return this.hostNameUri = this.hostNameTest;
        } else if (env === 'QA') {
            return this.hostNameUri = this.hostNameQA;
        } else if (env === 'PROD') {
            return this.hostNameUri = this.hostNamePROD;
        }
     return '';

        // console.log(this.hostNameUri); // I have data! Let's return it so subscribers can use it!
        // // we can do stuff with data if we want
        // this.myMethodSubject.next(this.hostNameUri);
    }

    public hostName(): any {
        return this.hostNameUri;
    }
    public user(uname) {
        this.userName = uname;
    }
    public loginSuccess(login: boolean) {
        this.login = login;
    }
    public _region(_reg: string) {
        this.reg = _reg.toLowerCase().replace(/\s/g, "");
    }
    public getRegion() {
      return this.reg;
    }

    public loginUserName() {
        return this.userName;
    }
   

  public setToken(val){
    this.token = val;
  }
 
  public getToken(){
    return this.token;
  }
}
