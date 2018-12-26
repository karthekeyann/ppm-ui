import { Component, OnInit, ErrorHandler } from '@angular/core';
import { HostNameUrl } from '../hostname.url';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { ErrorHandle } from '../error.handle';

@Component({
  selector: 'app-login-settings',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private environment = ["Production", "Test", "QA"];
  private region = ["COR", "TDS", "PAS COR", "PAS TDS"];
  public hostName88 = 'http://cscvappnor088.fsg.amer.csc.com:9000';
  public hostName90 = 'http://cscvappnor090.fsg.amer.csc.com:9000'; 
  public errorMessage;
  public userName;
  public hostNameurl: string;
  public credentials;

  constructor(private hostname: HostNameUrl, private router: Router, private app: LoginService, private errorHandle:ErrorHandle) {
	  //this.app.authenticate(undefined, undefined); // authenticate code
  }

  environmentChanged(env: any) {
    
    console.log(env);
    if (env == "Production" || env == "Test") {
      this.region = ["COR", "TDA"];
    }
    else if (env == "QA") {
      this.region = ["COR", "TDA", "PAS COR", "PAS TDA"];
    }
  }

  ngOnInit() {
    localStorage.removeItem('formData');
  }

  // authenticate code
  userLogin(formData) {
      this.credentials = formData;
      if(this.credentials){
      var  token= btoa(this.credentials.uname+":"+this.credentials.psw);
      this.hostname.setToken(token);
      this.userName = formData.uname;
      this.hostname.getHostName(formData.env);
      this.hostname.user(this.userName);
      this.hostname._region(formData.reg);
        this.app.authenticate(this.credentials, () => {
		    localStorage.setItem('formData', formData);
        console.log('formData: '+ JSON.stringify(formData));
         this.hostname.loginSuccess(true);
       // this.router.navigateByUrl('/');
	   this.router.navigate(['/']);
    },(err_res) => {
   //  let error:any=this.errorHandle.handleError(err_res, "");
   if(err_res.status === 401){
     this.errorMessage = "Invalide user name or password";
   }

  });
  }
    return false;
  }
  
  // our code
  /* userLogin(formData) {
    if( formData.uname != '' ) {
      if(formData.psw != '') {
        localStorage.setItem('formData', formData);
        console.log('formData: '+ JSON.stringify(formData));
         this.userName = formData.uname;
         this.hostname.getHostName(formData.env);
         this.hostname.user(this.userName);
         this.hostname._region(formData.reg);
         this.hostname.loginSuccess(true);
         this.router.navigate(['/']);
      } else {
        this.errorMessage = 'password incorrect...';
      }
    } else {
      this.errorMessage = 'user Name incorrect...';
    }
  }*/
}
