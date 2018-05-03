import { TestBed, inject } from '@angular/core/testing';

import { CityNameService } from './city-name.service';

describe('CityNameService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CityNameService]
    });
  });

  it('should be created', inject([CityNameService], (service: CityNameService) => {
    expect(service).toBeTruthy();
  }));
});
