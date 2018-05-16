import { TestBed, inject } from '@angular/core/testing';

import { LogedUserService } from './loged-user.service';

describe('LogedUserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LogedUserService]
    });
  });

  it('should be created', inject([LogedUserService], (service: LogedUserService) => {
    expect(service).toBeTruthy();
  }));
});
