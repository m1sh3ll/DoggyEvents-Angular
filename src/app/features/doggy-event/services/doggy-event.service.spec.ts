import { TestBed } from '@angular/core/testing';

import { DoggyEventService } from './doggy-event.service';

describe('DoggyEventService', () => {
  let service: DoggyEventService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DoggyEventService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
