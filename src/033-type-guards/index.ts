export function add(a: unknown, b: unknown) {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 2));
console.log(add('a', 'b'));

type Person = { typing: 'person'; name: string };
type Animal = { typing: 'animal'; color: string };
type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  public readonly typing = 'person';
  constructor(public name: string) {}
}

// This function uses type guards
function showName(obj: PersonOrAnimal) {
  // if ('name' in obj) console.log(obj.name);

  // if (obj instanceof Student) console.log(obj.name);

  switch (obj.typing) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal':
      console.log(`This is an animal. ${obj.color}`);
      return;
  }
}

showName(new Student('Joaquim'));
showName({ typing: 'animal', color: 'purple' });
