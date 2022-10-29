import { createAction, props } from '@ngrx/store';

export const nextValueChange = createAction(
  '[CALCULATOR] NEXT_VALUE_CHANGE',
  props<{ payload: { nextValue: string } }>()
);
export const nextValueChangeSuccess = createAction(
  '[CALCULATOR] NEXT_VALUE_CHANGE_SUCCESS',
  props<{ payload: { nextValue: string } }>()
);

export const selectOperationSuccess = createAction(
  '[CALCULATOR] SELECT_OPERATION_SUCCESS',
  props<{ payload: { operation: string } }>()
);

export const calculateExpressionSequence = createAction(
  '[CALCULATOR] CALCULATE_EXPRESSION_SEQUENCE'
);
export const calculateExpressionSequenceSuccess = createAction(
  '[CALCULATOR] CALCULATE_EXPRESSION_SEQUENCE_SUCCESS',
  props<{ payload: { result: string } }>()
);
export const calculateExpressionSequenceError = createAction(
  '[CALCULATOR] CALCULATE_EXPRESSION_SEQUENCE_ERROR',
  props<{ payload: { errorMessage: string } }>()
);

export const clearExpression = createAction('[CALCULATOR] CLEAR_EXPRESSION');
