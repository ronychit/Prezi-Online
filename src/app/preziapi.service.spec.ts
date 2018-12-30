import { TestBed } from '@angular/core/testing';

import { PreziapiService } from './preziapi.service';

describe('PreziapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PreziapiService = TestBed.get(PreziapiService);
    expect(service).toBeTruthy();
  });
});
