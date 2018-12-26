import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleExportListComponent } from './schedule-export-list.component';

describe('ScheduleExportListComponent', () => {
  let component: ScheduleExportListComponent;
  let fixture: ComponentFixture<ScheduleExportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleExportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleExportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
