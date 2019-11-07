import { TestBed } from '@angular/core/testing';

import { StaffDetailsService } from './staff-details.service';

describe('StaffDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StaffDetailsService = TestBed.get(StaffDetailsService);
    expect(service).toBeTruthy();
  });
});
