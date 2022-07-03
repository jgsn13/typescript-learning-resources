// The generic type 'T' is extending the type of the constructor of the class
// (its typing is similar to function typing)
export function decorator<T extends new (...args: any[]) => any>(target: T): T {
  return class extends target {
    public name: string;
    public color: string;
    public readonly typing = 'animal';

    constructor(...args: any[]) {
      super(...args);
      this.name = this.invertString(args[0]);
      this.color = this.invertString(args[1]);
    }

    private invertString(str: string): string {
      return str.split('').reverse().join('');
    }
  };
}

// The decorator is 'called' when it is assigned to a class, instead of the
// class that is 'called' when we create a new instance
@decorator
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('dog', 'yellow');
console.log(animal);
