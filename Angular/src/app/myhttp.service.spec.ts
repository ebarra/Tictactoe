import { TestBed, inject } from '@angular/core/testing';

import { MyhttpService } from './myhttp.service';

describe('MyhttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MyhttpService]
    });
  });

  it('should be created', inject([MyhttpService], (service: MyhttpService) => {
    expect(service).toBeTruthy();
  }));
});
