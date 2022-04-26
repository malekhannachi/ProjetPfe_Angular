import { TestBed } from '@angular/core/testing';

import { ContacterAdminService } from './contacter-admin.service';

describe('ContacterAdminService', () => {
  let service: ContacterAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContacterAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
