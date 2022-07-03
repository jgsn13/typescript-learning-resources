export function decorator(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  console.log(target);
  console.log(propertyKey);
  console.log(descriptor);

  return {
    value: function (...args: any[]) {
      return args[0].toUpperCase();
    },
  };
}

export class Person {
  public name: string;
  public lastname: string;
  public age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decorator
  public someMethod(msg: string): string {
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
