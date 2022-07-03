export function mergeObjects<T, K>(obj1: T, obj2: K): T & K {
  // return { ...obj1, ...obj2 };
  return Object.assign({}, obj1, obj2);
}

const obj1 = { key1: 'value 1' };
const obj2 = { key2: 'value 2' };
const mergedObj = mergeObjects(obj1, obj2);
console.log(mergedObj);
