import { Component, OnInit } from '@angular/core';
import { HostNameUrl } from '../hostname.url';
import { Router } from '@angular/router';
// import { LoginService } from './login.service';
import { LoginService } from '../login/login.service';

@Component({
  selector: 'top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  title = 'app';
  public userName;
  public loginSuccess;
  constructor(private utilObj: HostNameUrl, private router: Router, private app: LoginService) {
    // http.get('resource').subscribe(data => this.greeting = data);
  }
  
  ngOnInit() {
    this.userName = this.utilObj.userName;
    this.loginSuccess = this.utilObj.login;
  }

  logout() {
    localStorage.removeItem('formData');
   
    console.log('name: '+ localStorage.getItem('userName'));
    sessionStorage.clear();
    window.location.reload();
    // this.router.ngOnDestroy();
    this.router.navigate(['/']);
  }
  
  authenticated() { return this.app.authenticated; }

  login() {
    this.router.navigate(['/login']);
  }
}
