import { TestBed } from '@angular/core/testing';

import { HofDataService } from './hof-data.service';

describe('HofDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: HofDataService = TestBed.get(HofDataService);
    expect(service).toBeTruthy();
  });
});
