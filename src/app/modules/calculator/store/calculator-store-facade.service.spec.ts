import { TestBed } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';

import { CalculatorStoreFacadeService } from './calculator-store-facade.service';

describe('CalculatorStoreFacadeService', () => {
  let service: CalculatorStoreFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorStoreFacadeService],
      imports: [StoreModule.forRoot({}, {})],
    });
    service = TestBed.inject(CalculatorStoreFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
