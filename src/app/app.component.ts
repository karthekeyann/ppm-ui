import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  public userName;
  public loginSuccess;
  constructor() {
    
  }
  
  ngOnInit() {
  }
}
