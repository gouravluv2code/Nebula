import { TestBed } from '@angular/core/testing';

import { VacationRentalService } from './vacation-rental.service';

describe('VacationRentalService', () => {
  let service: VacationRentalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VacationRentalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
