type Name = { name: string };
type Lastname = { lastname: string };
type Age = { age: number };
type Person = Name & Lastname & Age;

export const person: Person = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;
