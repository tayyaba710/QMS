import { TestBed } from '@angular/core/testing';

import { QuestionariesService } from './questionaries.service';

describe('QuestionariesService', () => {
  let service: QuestionariesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QuestionariesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
