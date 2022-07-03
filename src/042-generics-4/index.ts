// Restrictions in generics (constraints)
type GetKeyFn = <O, K extends keyof O>(obj: O, key: K) => O[K];

export const getKey: GetKeyFn = (obj, key) => obj[key];

const animal = {
  color: 'pink',
  vaccines: ['vaccine 1', 'vaccine 2'],
};

const vaccines = getKey(animal, 'vaccines');
const color = getKey(animal, 'color');

console.log(vaccines);
console.log(color);
