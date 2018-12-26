import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportCompletedComponent } from './import-completed.component';

describe('ImportInprogressComponent', () => {
  let component: ImportCompletedComponent;
  let fixture: ComponentFixture<ImportCompletedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportCompletedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportCompletedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
