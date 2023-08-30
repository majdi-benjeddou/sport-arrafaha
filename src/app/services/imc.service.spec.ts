import { TestBed } from '@angular/core/testing';

import { ImcService } from './imc.service';

describe('ImcService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ImcService = TestBed.get(ImcService);
    expect(service).toBeTruthy();
  });
});
