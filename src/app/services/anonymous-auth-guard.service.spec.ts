import { TestBed } from '@angular/core/testing';

import { AnonymousAuthGuardService } from './anonymous-auth-guard.service';

describe('AnonymousAuthGuardService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AnonymousAuthGuardService = TestBed.get(AnonymousAuthGuardService);
    expect(service).toBeTruthy();
  });
});
