import { TestBed } from '@angular/core/testing';

import { SemestrielService } from './semestriel.service';

describe('SemestrielService', () => {
  let service: SemestrielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SemestrielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
