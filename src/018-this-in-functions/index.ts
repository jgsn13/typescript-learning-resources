// 'this' in arrow functions always is the globalThis
// We can add type to 'this' in the following way:
export function someFunction(this: Date, arg1: string): void {
  console.log(this); // now, 'this' isn't the globalThis anymore
  console.log(arg1);
}
someFunction.call(new Date(), 'Joaquim');
