/* eslint-disable */
// Basic types (inferred types)
export const name: string = 'Joaquim';
const age: number = 19;
const adult: boolean = true;
const hisSimbol: symbol = Symbol('any-symbol');

// Arrays
const numberArray: Array<number> = [1, 2, 3];
const stringArray: string[] = ['hello', 'world'];

// Objects
const person: { name: string; age: number; adult?: boolean } = {
  name: 'Joaquim',
  age: 19,
};

// Function
function sum(x: number, y: number): number {
  return x + y;
}

const quocient: (x: number, y: number) => number = (x, y) => x / y;
