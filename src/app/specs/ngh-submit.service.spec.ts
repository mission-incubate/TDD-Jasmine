import { TestBed, inject } from '@angular/core/testing';

import { NghSubmitService } from '../services/ngh-submit.service';

describe('NghSubmitService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NghSubmitService]
    });
  });

  it('should be created', inject([NghSubmitService], (service: NghSubmitService) => {
    expect(service).toBeTruthy();
  }));
});
