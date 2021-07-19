import { TestBed } from '@angular/core/testing';

import { CleanerGuardService } from './cleaner-guard.service';

describe('CleanerGuardService', () => {
  let service: CleanerGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CleanerGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
