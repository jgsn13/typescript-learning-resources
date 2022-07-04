// "useDefineForClassFields": false
// Turning this on causes tsc to emit fields directly. This is expected to
// break decorators

export function decorator(target: any, propertyKey: string) {
  let propertyValue: any;

  const getter = function () {
    return propertyValue;
  };

  const setter = function (value: any) {
    propertyValue = value.toUpperCase();
  };

  Object.defineProperty(target, propertyKey, {
    get: getter,
    set: setter,
  });
}

export class Person {
  @decorator
  public name: string;
  @decorator
  public lastname: string;
  public age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

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
console.log(person.someMethod('any message'));
