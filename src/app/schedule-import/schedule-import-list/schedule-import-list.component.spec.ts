import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleImportListComponent } from './schedule-import-list.component';

describe('ScheduleImportListComponent', () => {
  let component: ScheduleImportListComponent;
  let fixture: ComponentFixture<ScheduleImportListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleImportListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleImportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
