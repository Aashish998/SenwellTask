import { TestBed } from '@angular/core/testing';

import { NameServicesService } from './name-services.service';

describe('NameServicesService', () => {
  let service: NameServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NameServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
