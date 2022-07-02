/* eslint-disable */
let x;
if (typeof x === 'undefined') x = 20;
console.log(x * 2);

export function createPerson(
  firstName: string,
  lastName?: string
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

export function elevatedByTwo(x: any) {
  if (typeof x === 'number') return x * x;
  return null;
}

const twoElevatedByTwo = elevatedByTwo(2);
const twoElevatedByTwoString = elevatedByTwo('2');

if (twoElevatedByTwoString === null) {
  console.log('Invalid input');
} else {
  console.log(twoElevatedByTwoString * 100);
}
