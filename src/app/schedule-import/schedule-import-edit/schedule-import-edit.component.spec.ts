import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleImportEditComponent } from './schedule-import-edit.component';

describe('SheduleImportEditComponent', () => {
  let component: ScheduleImportEditComponent;
  let fixture: ComponentFixture<ScheduleImportEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleImportEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleImportEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
