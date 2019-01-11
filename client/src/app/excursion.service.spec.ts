import { TestBed } from '@angular/core/testing';

import { ExcursionService } from './excursion.service';

describe('ExcursionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcursionService = TestBed.get(ExcursionService);
    expect(service).toBeTruthy();
  });
});
