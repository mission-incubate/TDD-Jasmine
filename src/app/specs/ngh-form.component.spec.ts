import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatIconModule } from '@angular/material/icon';
import {
  MatToolbarModule, MatSidenavModule, MatListModule, MatExpansionModule,
  MatFormFieldModule, MatOptionModule, MatSelectModule,
} from '@angular/material';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Router } from '@angular/router';


import { NghFormComponent } from '../ngh-form/ngh-form.component';

describe('NghFormComponent', () => {
  let component: NghFormComponent;
  let fixture: ComponentFixture<NghFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [NghFormComponent],
      imports: [MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, MatExpansionModule, HttpClientTestingModule,
        MatFormFieldModule, MatOptionModule, RouterModule, MatSelectModule, RouterTestingModule, BrowserAnimationsModule
      ],
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
