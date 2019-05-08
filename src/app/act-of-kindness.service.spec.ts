import { TestBed } from '@angular/core/testing';

import { ActOfKindnessService } from './act-of-kindness.service';

describe('ActOfKindnessService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ActOfKindnessService = TestBed.get(ActOfKindnessService);
    expect(service).toBeTruthy();
  });
});
