import { TestBed } from '@angular/core/testing';

import { MystudysetsService } from './mystudysets.service';

describe('MystudysetsService', () => {
  let service: MystudysetsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MystudysetsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
