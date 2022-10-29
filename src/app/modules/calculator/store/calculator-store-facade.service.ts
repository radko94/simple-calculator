import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromActions from './calculator.actions';
import * as fromSelectors from './calculator.selectors';

@Injectable()
export class CalculatorStoreFacadeService {
  public constructor(private readonly _store: Store) {}

  public get actions() {
    return {
      nextValueChange: (nextValue: string) =>
        this._store.dispatch(
          fromActions.nextValueChange({ payload: { nextValue } })
        ),
      selectOperator: (operation: string) =>
        this._store.dispatch(
          fromActions.selectOperationSuccess({ payload: { operation } })
        ),
      calculateExpression: () =>
        this._store.dispatch(fromActions.calculateExpressionSequence()),
      clearExpression: () =>
        this._store.dispatch(fromActions.clearExpression()),
    };
  }

  public get selectors() {
    return {
      evaluationSequense$: this._store.select(
        fromSelectors.selectExpressionSequence
      ),
      nextValue$: this._store.select(fromSelectors.selectNextValue),
    };
  }
}
