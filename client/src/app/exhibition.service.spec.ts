import { TestBed } from '@angular/core/testing';

import { ExhibitionService } from './exhibition.service';

describe('ExhibitionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExhibitionService = TestBed.get(ExhibitionService);
    expect(service).toBeTruthy();
  });
});
