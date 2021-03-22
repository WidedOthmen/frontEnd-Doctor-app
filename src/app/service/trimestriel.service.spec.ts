import { TestBed } from '@angular/core/testing';

import { TrimestrielService } from './trimestriel.service';

describe('TrimestrielService', () => {
  let service: TrimestrielService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TrimestrielService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
