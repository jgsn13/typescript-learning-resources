// NOTE:  A parameter decorator can only be used to observe that a parameter
// has been declared on a method.

export function decorator(
  target: any,
  propertyKey: string | symbol,
  parameterIndex: number
) {
  console.log(target);
  console.log(propertyKey);
  console.log(parameterIndex);
}

export class Person {
  public name: string;
  public lastname: string;
  public age: number;

  constructor(
    @decorator name: string,
    @decorator lastname: string,
    @decorator age: number
  ) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  public someMethod(@decorator msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  public get fullName(): string {
    return `${this.name} ${this.lastname}`;
  }

  public set fullName(value: string) {
    const words = value.split(/\s+/g);
    const firstName = words.shift();
    if (!firstName) return;
    this.name = firstName;
    this.lastname = words.join(' ');
  }
}

const person = new Person('Joaquim', 'Gregorio', 19);
const method = person.someMethod('any message');
console.log(method);
