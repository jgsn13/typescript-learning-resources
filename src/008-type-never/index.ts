// the function will never return anything
export function createError(): never {
  throw new Error('Some Error');
}
