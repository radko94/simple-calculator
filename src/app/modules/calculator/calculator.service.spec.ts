import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CalculatorService } from './calculator.service';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';
import { backendEndpoints } from '@appModule/variables/backend.variables';

describe('CalculatorService', () => {
  let service: CalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CalculatorService],
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(CalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('calculateExpression should call http.post', async () => {
    const http = TestBed.inject(HttpClient);
    const postSpy = spyOn(http, 'post').and.returnValue(of('test_value'));

    const result = await service.calculateExpression('test_expression').toPromise();

    expect(postSpy).toHaveBeenCalled();
    expect(postSpy).toHaveBeenCalledTimes(1);
    expect(postSpy).toHaveBeenCalledWith(
      backendEndpoints.evaluateExpressionEndpoint,
      { expression: 'test_expression' }
    );
    expect(result).toBe('test_value')
  });
});
