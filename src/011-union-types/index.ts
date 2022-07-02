export function sumOrConcat(
  x: number | string,
  y: number | string
): number | string {
  return typeof x === 'number' && typeof y === 'number' ? x + y : `${x}${y}`;
}

console.log(sumOrConcat(10, 30));
console.log(sumOrConcat('10', 30));
