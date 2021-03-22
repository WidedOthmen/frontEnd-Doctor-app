import { TestBed } from '@angular/core/testing';

import { AnnuelService } from './annuel.service';

describe('AnnuelService', () => {
  let service: AnnuelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AnnuelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
