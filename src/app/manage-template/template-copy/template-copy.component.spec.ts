import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateCopyComponent } from './template-copy.component';

describe('TemplateCreateComponent', () => {
  let component: TemplateCopyComponent;
  let fixture: ComponentFixture<TemplateCopyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemplateCopyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateCopyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
