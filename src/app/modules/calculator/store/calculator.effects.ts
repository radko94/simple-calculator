import { Injectable } from '@angular/core';
import { Operations } from '@appModule/variables/global.variables';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { CalculatorService } from '../calculator.service';

import * as fromActions from './calculator.actions';
import * as fromSelectors from './calculator.selectors';
import { defaultNextValue } from './calculator.state';

@Injectable()
export class CalculatorEffects {
  private _shouldClearSequence: boolean;

  public constructor(
    private readonly _store: Store,
    private readonly _actions: Actions,
    private readonly _calculatorService: CalculatorService
  ) {
    this._shouldClearSequence = false;
  }

  public nextValueChange$ = createEffect(() =>
    this._actions.pipe(
      ofType<ReturnType<typeof fromActions.nextValueChange>>(
        fromActions.nextValueChange
      ),
      withLatestFrom(this._store.select(fromSelectors.selectNextValue)),
      map(([action, nextValue]) => {
        let nextVal: string = nextValue.toString();

        if (this._shouldClearSequence) {
          this._store.dispatch(fromActions.clearExpression());
          nextVal = defaultNextValue
        }

        if (action.payload.nextValue === Operations.minusPlusSign) {
          if (nextVal === defaultNextValue) {
            return fromActions.nextValueChangeSuccess({
              payload: { nextValue },
            });
          }

          if (nextVal.startsWith(Operations.subtraction)) {
            nextVal = nextVal.slice(1);
          } else {
            nextVal = Operations.subtraction + nextVal;
          }
        } else {
          nextVal =
            nextValue === defaultNextValue || this._shouldClearSequence
              ? action.payload.nextValue
              : `${nextValue}${action.payload.nextValue}`;
        }

        this._shouldClearSequence = false

        return fromActions.nextValueChangeSuccess({
          payload: { nextValue: nextVal },
        });
      })
    )
  );

  public calculateExpression$ = createEffect(() =>
    this._actions.pipe(
      ofType<ReturnType<typeof fromActions.calculateExpressionSequence>>(
        fromActions.calculateExpressionSequence
      ),
      withLatestFrom(
        this._store.select(fromSelectors.selectExpressionSequence)
      ),
      switchMap(([action, expressionSequence]) =>
        this._calculatorService.calculateExpression(expressionSequence).pipe(
          map((result) => {
            this._shouldClearSequence = true;

            return fromActions.calculateExpressionSequenceSuccess({
              payload: { result },
            });
          }),
          catchError((err) =>
            of(
              fromActions.calculateExpressionSequenceError({
                payload: { errorMessage: 'something went wrong' },
              })
            )
          )
        )
      )
    )
  );
}
