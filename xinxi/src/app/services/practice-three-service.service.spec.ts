import { TestBed } from '@angular/core/testing';

import { PracticeThreeServiceService } from './practice-three-service.service';

describe('PracticeThreeServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PracticeThreeServiceService = TestBed.get(PracticeThreeServiceService);
    expect(service).toBeTruthy();
  });
});
