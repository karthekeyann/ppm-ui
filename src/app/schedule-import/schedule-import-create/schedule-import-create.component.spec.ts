import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScheduleImportCreateComponent } from './schedule-import-create.component';

describe('ScheduleImportCreateComponent', () => {
  let component: ScheduleImportCreateComponent;
  let fixture: ComponentFixture<ScheduleImportCreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScheduleImportCreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScheduleImportCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
