export enum Operations {
  addition = '+',
  subtraction = '-',
  multiplication = '*',
  division = '/',
  minusPlusSign = '+/-',
  dot = '.'
}

export const numpad = [Operations.minusPlusSign, 0, Operations.dot, 1, 2, 3, 4, 5, 6, 7, 8, 9];
export const operations = [
  Operations.division,
  Operations.multiplication,
  Operations.subtraction,
  Operations.addition,
];
