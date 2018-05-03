import { TestBed, inject } from '@angular/core/testing';

import { TypeNameService } from './type-name.service';

describe('TypeNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TypeNameService]
    });
  });

  it('should be created', inject([TypeNameService], (service: TypeNameService) => {
    expect(service).toBeTruthy();
  }));
});
