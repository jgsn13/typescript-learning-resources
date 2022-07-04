// Declaration merging occurs in *.d.ts files with namespace
// for this example I'll use lodash lib
import lodash from 'lodash';

// To work properly we must extend the library typing by using declaration
// files (this is different in different libraries).
lodash.product = function (arr: number[]): number {
  return arr.reduce((sum, value) => sum * value, 1);
};

const arr = [100, 200, 300, 400];

console.log(lodash.sum(arr));
console.log(lodash.min(arr));
console.log(lodash.max(arr));
console.log(lodash.mean(arr));
console.log(lodash.product(arr));
