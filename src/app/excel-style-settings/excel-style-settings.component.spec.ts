import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExcelStyleSettingsComponent } from './excel-style-settings.component';

describe('ExcelStyleSettingsComponent', () => {
  let component: ExcelStyleSettingsComponent;
  let fixture: ComponentFixture<ExcelStyleSettingsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExcelStyleSettingsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExcelStyleSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
