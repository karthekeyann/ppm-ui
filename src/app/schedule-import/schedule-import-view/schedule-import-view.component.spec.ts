import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleImportViewComponent } from './schedule-import-view.component';

describe('SheduleImportViewComponent', () => {
  let component: ScheduleImportViewComponent;
  let fixture: ComponentFixture<ScheduleImportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleImportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleImportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
