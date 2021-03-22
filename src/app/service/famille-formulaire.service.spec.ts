import { TestBed } from '@angular/core/testing';

import { FamilleFormulaireService } from './famille-formulaire.service';

describe('FamilleFormulaireService', () => {
  let service: FamilleFormulaireService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FamilleFormulaireService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
