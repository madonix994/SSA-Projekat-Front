import { TestBed, inject } from '@angular/core/testing';

import { OwnersService } from './owners.service';

describe('OwnersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OwnersService]
    });
  });

  it('should be created', inject([OwnersService], (service: OwnersService) => {
    expect(service).toBeTruthy();
  }));
});
