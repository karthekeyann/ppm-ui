import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleImportCopyComponent } from './schedule-import-copy.component';

describe('ScheduleImportCopyComponent', () => {
  let component: ScheduleImportCopyComponent;
  let fixture: ComponentFixture<ScheduleImportCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleImportCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleImportCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
