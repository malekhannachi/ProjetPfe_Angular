import { TestBed } from '@angular/core/testing';

import { DemandeCursusService } from './demande-cursus.service';

describe('DemandeCursusService', () => {
  let service: DemandeCursusService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DemandeCursusService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
