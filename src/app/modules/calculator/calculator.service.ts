import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { backendEndpoints } from '@appModule/variables/backend.variables';
import { Observable, of } from 'rxjs';

@Injectable()
export class CalculatorService {
  public constructor(private readonly _http: HttpClient) {}

  public calculateExpression(expression: string): Observable<string> {
    return this._http.post<string>(
      backendEndpoints.evaluateExpressionEndpoint,
      { expression }
    );
  }
}
