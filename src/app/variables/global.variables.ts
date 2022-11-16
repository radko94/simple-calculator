export enum Operations {
  addition = '+',
  subtraction = '-',
  multiplication = '*',
  division = '/',
  minusPlusSign = '+/-',
  dot = '.',
}

export enum Snackbar {
  shouldNotTriggerCalculate = 'Expression already calculated!',
  emptyExpressionString = 'You must choose and expression to evaluate.',
  fillExpressionStringAction = 'Ok, I am going to fill it up.',
  action = 'Ok.',
}

export const numpad = [
  Operations.minusPlusSign,
  0,
  Operations.dot,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
];
export const operations = [
  Operations.division,
  Operations.multiplication,
  Operations.subtraction,
  Operations.addition,
];
