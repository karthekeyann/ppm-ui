import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExportPcdComponent } from './export-pcd.component';

describe('ExportPcdComponent', () => {
  let component: ExportPcdComponent;
  let fixture: ComponentFixture<ExportPcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExportPcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExportPcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
