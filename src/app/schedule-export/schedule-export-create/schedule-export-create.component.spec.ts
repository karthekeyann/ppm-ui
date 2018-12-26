import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleExportCreateComponent } from './schedule-export-create.component';

describe('SheduleExportCreateComponent', () => {
  let component: ScheduleExportCreateComponent;
  let fixture: ComponentFixture<ScheduleExportCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleExportCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleExportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
