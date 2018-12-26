import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleExportViewComponent } from './schedule-export-view.component';

describe('ScheduleExportViewComponent', () => {
  let component: ScheduleExportViewComponent;
  let fixture: ComponentFixture<ScheduleExportViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleExportViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleExportViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
