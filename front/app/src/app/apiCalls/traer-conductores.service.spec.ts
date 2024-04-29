import { TestBed } from '@angular/core/testing';

import { TraerConductoresService } from './traer-conductores.service';

describe('TraerConductoresService', () => {
  let service: TraerConductoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerConductoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
