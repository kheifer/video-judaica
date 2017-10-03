import { TestBed, inject } from '@angular/core/testing';

import { MemorabiliaService } from './memorabilia.service';

describe('MemorabiliaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MemorabiliaService]
    });
  });

  it('should be created', inject([MemorabiliaService], (service: MemorabiliaService) => {
    expect(service).toBeTruthy();
  }));
});
