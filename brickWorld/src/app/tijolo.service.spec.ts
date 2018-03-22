import { TestBed, inject } from '@angular/core/testing';

import { TijoloService } from './tijolo.service';

describe('TijoloService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TijoloService]
    });
  });

  it('should be created', inject([TijoloService], (service: TijoloService) => {
    expect(service).toBeTruthy();
  }));
});
