import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleExportEditComponent } from './schedule-export-edit.component';

describe('SheduleExportEditComponent', () => {
  let component: ScheduleExportEditComponent;
  let fixture: ComponentFixture<ScheduleExportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleExportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleExportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
