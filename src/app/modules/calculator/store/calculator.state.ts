export const defaultNextValue: string = '0';

export const calculatorStateFeatureKey = 'calculatorStateFeatureKey';

export interface ICalculatorState {
  expressionSequence: string;
  nextValue: string;
}

export const initialCalculatorState: ICalculatorState = {
  expressionSequence: undefined,
  nextValue: defaultNextValue,
};
