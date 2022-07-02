// NOTE: use 'unknown' instead of 'any'
let x: unknown;

x = 100;
x = 'Joaquim';
x = 10;
const y = 800;

if (typeof x === 'number') console.log(x + y);
