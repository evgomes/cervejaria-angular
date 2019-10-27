import { TestBed } from '@angular/core/testing';

import { BeerTypesService } from './beer-types.service';

describe('BeerTypesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BeerTypesService = TestBed.get(BeerTypesService);
    expect(service).toBeTruthy();
  });
});
