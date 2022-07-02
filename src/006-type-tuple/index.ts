/* eslint-disable */
const clientData: readonly [number, string, number?, ...string[]] = [
  1,
  'Joaquim',
  19,
];
console.log(clientData);

// we can also declare 'readonly' arrays:
const arr1: readonly number[] = [1, 2, 3, 4];
const arr2: ReadonlyArray<number> = [1, 2, 3, 4];
