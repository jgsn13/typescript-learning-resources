/* parameters in decorator */
// Decorator Factories

export function decorator(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
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
        return `${str.split('').reverse().join('')} ${param1} ${param2}`;
      }
    };
  };
}

@decorator('value1', 'value2')
export class Animal {
  constructor(public name: string, public color: string) {}
}

const animal = new Animal('dog', 'yellow');
console.log(animal);
