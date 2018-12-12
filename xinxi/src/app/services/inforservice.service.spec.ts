import { TestBed } from '@angular/core/testing';

import { InforserviceService } from './inforservice.service';

describe('InforserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InforserviceService = TestBed.get(InforserviceService);
    expect(service).toBeTruthy();
  });
});
