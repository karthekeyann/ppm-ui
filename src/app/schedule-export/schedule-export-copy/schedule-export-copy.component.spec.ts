import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleExportCopyComponent } from './schedule-export-copy.component';

describe('SheduleExportCopyComponent', () => {
  let component: ScheduleExportCopyComponent;
  let fixture: ComponentFixture<ScheduleExportCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleExportCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleExportCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
