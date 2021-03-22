import { TestBed } from '@angular/core/testing';

import { TableauTransfusionnelService } from './tableau-transfusionnel.service';

describe('TableauTransfusionnelService', () => {
  let service: TableauTransfusionnelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TableauTransfusionnelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
