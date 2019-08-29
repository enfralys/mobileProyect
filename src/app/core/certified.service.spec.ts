import { TestBed } from '@angular/core/testing';

import { CertifiedService } from './certified.service';

describe('CertifiedService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CertifiedService = TestBed.get(CertifiedService);
    expect(service).toBeTruthy();
  });
});
