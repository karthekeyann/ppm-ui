import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ImportInprogressTaskComponent } from './import-inprogress-task.component';


describe('ImportInprogressTaskComponent', () => {
  let component: ImportInprogressTaskComponent;
  let fixture: ComponentFixture<ImportInprogressTaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportInprogressTaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportInprogressTaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
