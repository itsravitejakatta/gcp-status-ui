import { TestBed } from '@angular/core/testing';

import { GcpServiceService } from './gcp-service.service';

describe('GcpServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GcpServiceService = TestBed.get(GcpServiceService);
    expect(service).toBeTruthy();
  });
});
