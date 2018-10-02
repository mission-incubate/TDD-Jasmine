import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { RouterModule, Router } from '@angular/router';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule, } from '@angular/common/http';

import { SidebarNavComponent } from '../sidebar-nav/sidebar-nav.component';

describe('SidebarNavComponent', () => {
  let component: SidebarNavComponent;
  let fixture: ComponentFixture<SidebarNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SidebarNavComponent],
      imports: [MatIconModule, MatToolbarModule, MatSidenavModule, MatListModule, HttpClientModule,
        MatFormFieldModule, MatOptionModule, RouterModule, HttpClientTestingModule, RouterTestingModule,
        BrowserAnimationsModule
      ],
      providers: []
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
