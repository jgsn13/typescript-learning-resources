// Array<T> or T[]
/* eslint-disable */
export function multiplyArgs(...args: number[]): number {
  return args.reduce(
    (previousValue, currentValue) => previousValue * currentValue,
    1
  );
}

console.log(multiplyArgs(1, 2, 3, 4));

export function concatenateString(...args: Array<string>): string {
  return args.join(' ');
}

console.log(concatenateString('Joaquim', 'Gregorio'));

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

console.log(toUpperCase('a', 'b', 'c'));
