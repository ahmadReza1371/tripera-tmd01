import { TestBed, inject } from '@angular/core/testing';

import { GetTourDetailService } from './get-tour-detail.service';

describe('GetTourDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GetTourDetailService]
    });
  });

  it('should be created', inject([GetTourDetailService], (service: GetTourDetailService) => {
    expect(service).toBeTruthy();
  }));
});
