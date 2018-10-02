import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutModule } from '@angular/cdk/layout';
import { MatIconModule } from '@angular/material/icon';
import {
  MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule,
  MatSelectModule, MatInputModule
} from '@angular/material';

import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MsAdalAngular6Service, MsAdalAngular6Module } from 'microsoft-adal-angular6';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from '../login/login.component';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [LayoutModule, HttpClientModule, MatIconModule, HttpClientTestingModule, RouterTestingModule,
        MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule, BrowserAnimationsModule,
        MatSelectModule, MatInputModule, ReactiveFormsModule, MsAdalAngular6Module
      ],
      providers: [MsAdalAngular6Service]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  // it('should create', () => {
  //   expect(component).toBeTruthy();
  // });
});
