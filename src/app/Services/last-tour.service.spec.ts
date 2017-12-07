import { TestBed, inject } from '@angular/core/testing';

import { LastTourService } from './last-tour.service';

describe('LastTourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LastTourService]
    });
  });

  it('should be created', inject([LastTourService], (service: LastTourService) => {
    expect(service).toBeTruthy();
  }));
});
