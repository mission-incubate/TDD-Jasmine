import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NghFormComponent } from '../ngh-form/ngh-form.component';

describe('NghFormComponent', () => {
  let component: NghFormComponent;
  let fixture: ComponentFixture<NghFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NghFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NghFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
