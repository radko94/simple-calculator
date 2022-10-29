import { createFeatureSelector, createSelector } from '@ngrx/store';
import {
  calculatorStateFeatureKey,
  ICalculatorState,
} from './calculator.state';

const calculatorFeatureSelector = createFeatureSelector<ICalculatorState>(
  calculatorStateFeatureKey
);

export const selectExpressionSequence = createSelector(
  calculatorFeatureSelector,
  (state) => state.expressionSequence
);

export const selectNextValue = createSelector(
  calculatorFeatureSelector,
  (state) => state.nextValue
);
