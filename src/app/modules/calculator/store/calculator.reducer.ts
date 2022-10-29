import { createReducer, on } from '@ngrx/store';
import { defaultNextValue, initialCalculatorState } from './calculator.state';

import * as fromActions from './calculator.actions';

export const calculatorReducer = createReducer(
  initialCalculatorState,
  on(fromActions.nextValueChangeSuccess, (state, action) => ({
    ...state,
    nextValue: action.payload.nextValue,
  })),
  on(fromActions.selectOperationSuccess, (state, action) => ({
    ...state,
    expressionSequence: `${state.expressionSequence ? state.expressionSequence : ''}${state.nextValue} ${action.payload.operation} `,
    nextValue: defaultNextValue,
  })),
  on(fromActions.calculateExpressionSequence, (state, action) => ({
    ...state,
    expressionSequence: `${state.expressionSequence}${state.nextValue}`
  })),
  on(fromActions.calculateExpressionSequenceSuccess, (state, action) => ({
    ...state,
    nextValue: action.payload.result,
  })),
  on(fromActions.clearExpression, (state, action) => ({
    ...state,
    expressionSequence: undefined,
    nextValue: '0',
  })),
  on(fromActions.clearExpression, (state, action) => ({
    ...state,
    expressionSequence: undefined
  })),
);
