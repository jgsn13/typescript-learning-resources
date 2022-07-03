interface NameType {
  readonly name: string;
}

interface LastnameType {
  lastname: string;
}

type FullNameType = {
  fullName(): string;
};

// The advantange of 'type' over interface is the way you can create simple
// types or just merge it
type PersonType = NameType & LastnameType & FullNameType;

// we can extends 'type'
interface PersonType2 extends NameType, LastnameType, FullNameType {}

export class Person implements PersonType2 {
  constructor(public name: string, public lastname: string) {}

  public fullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}

// Declaration merging:
interface Car {
  model: string;
}

interface Car {
  year: string;
}

const car: Car = {
  model: 'Onix',
  year: '2020',
};
