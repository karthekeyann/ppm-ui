import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-excel-style-settings',
  templateUrl: './excel-style-settings.component.html',
  styleUrls: ['./excel-style-settings.component.css']
})
export class ExcelStyleSettingsComponent implements OnInit {
  sizes = [];
  public fontTypes: Array<string> = ['Arial',
                                    'Calibri',
                                    'Cambria',
                                    'Courier New',
                                    'Times New Roman'];

  public styles: Array<string> = ['Bold', 'Normal'];

  constructor() {

  }

  ngOnInit() {
    this.sizes = Array(72).fill(0).map((x, i) => i + 1);
  }

}
