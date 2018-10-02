import { TestBed, async } from '@angular/core/testing';
import { HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { RouterModule, Router } from '@angular/router';
import { AppComponent } from '../app.component';

import { MsAdalAngular6Service, MsAdalAngular6Module } from 'microsoft-adal-angular6';

import { RouterTestingModule } from '@angular/router/testing';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [RouterTestingModule, HttpClientModule,
        MsAdalAngular6Module.forRoot({
          tenant: 'UTCSDevTst.onmicrosoft.com',
          clientId: '5f0b38e9-27b6-4862-ba00-0d5bf53b4fcf',
          redirectUri: 'http://localhost:4200/home',
          endpoints: {
            'https://localhost/Api/': 'xxx-bae6-4760-b434-xxx'
          },
          navigateToLoginRequestUrl: false,
          cacheLocation: 'localStorage',
        }),
      ],
      providers: [MsAdalAngular6Service]
    }).compileComponents();
  }));
  // it('should create the app', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // }));
  // it(`should have as title 'ExxonMobil'`, async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('ExxonMobil');
  // }));
  // it('should render title in a h1 tag', async(() => {
  //   const fixture = TestBed.createComponent(AppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ExxonMobil!');
  // }));
});
