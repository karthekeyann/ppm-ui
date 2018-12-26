import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportPcdComponent } from './import-pcd.component';

describe('ImportPcdComponent', () => {
  let component: ImportPcdComponent;
  let fixture: ComponentFixture<ImportPcdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportPcdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportPcdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
