import { TestBed } from '@angular/core/testing';

import { PeoductService } from './peoduct.service';

describe('PeoductService', () => {
  let service: PeoductService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PeoductService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
