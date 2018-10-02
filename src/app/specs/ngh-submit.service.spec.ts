import { TestBed, inject } from '@angular/core/testing';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule } from '@angular/material';
import { RouterModule, Router } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NghSubmitService } from '../services/ngh-submit.service';

describe('NghSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NghSubmitService],
      imports: [HttpClientModule, MatIconModule,
        MatToolbarModule, MatSidenavModule, MatListModule, MatFormFieldModule, MatOptionModule,
        RouterTestingModule, BrowserAnimationsModule
      ],
    });
  });

  it('should be created', inject([NghSubmitService], (service: NghSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
