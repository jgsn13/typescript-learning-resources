// ES2015 module syntax is preferred over custom TypeScript modules and
// namespaces.
/* eslint-disable @typescript-eslint/no-namespace */
namespace MyNamespace {
  const name = 'Joaquim';

  export class Person {
    constructor(public name: string) {}
  }

  const person = new Person(name);
  console.log(person);

  export namespace OtherNamespace {
    export const name = 'Joaquim';
  }
}

export const person = new MyNamespace.Person(MyNamespace.OtherNamespace.name);
