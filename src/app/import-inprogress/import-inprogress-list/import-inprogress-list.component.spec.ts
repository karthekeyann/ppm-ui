import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportInprogressListComponent } from './import-inprogress-list.component';

describe('ImportInprogressListComponent', () => {
  let component: ImportInprogressListComponent;
  let fixture: ComponentFixture<ImportInprogressListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportInprogressListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportInprogressListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
