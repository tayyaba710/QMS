import { TestBed } from '@angular/core/testing';

import { GeneralVisitService } from './general-visit.service';

describe('GeneralVisitService', () => {
  let service: GeneralVisitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeneralVisitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
