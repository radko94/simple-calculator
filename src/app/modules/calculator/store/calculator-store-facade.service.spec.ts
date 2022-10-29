import { TestBed } from '@angular/core/testing';

import { CalculatorStoreFacadeService } from './calculator-store-facade.service';

describe('CalculatorStoreFacadeService', () => {
  let service: CalculatorStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CalculatorStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
