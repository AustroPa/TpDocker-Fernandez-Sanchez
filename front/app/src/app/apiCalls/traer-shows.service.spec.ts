import { TestBed } from '@angular/core/testing';

import { TraerShowsService } from './traer-shows.service';

describe('TraerShowsService', () => {
  let service: TraerShowsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TraerShowsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
