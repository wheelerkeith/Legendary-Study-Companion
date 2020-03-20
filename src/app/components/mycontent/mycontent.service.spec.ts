import { TestBed } from '@angular/core/testing';

import { MycontentService } from './mycontent.service';

describe('MycontentService', () => {
  let service: MycontentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MycontentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
