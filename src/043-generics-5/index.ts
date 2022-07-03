// Generics with classes (Stack data structure)

export class Person<T, U> {
  constructor(public name: T, public age: U) {}
}

export class Stack<T> {
  private counter = 0;
  private elements: { [k: number]: T } = {};

  public push(element: T): void {
    this.elements[this.counter] = element;
    this.counter++;
  }

  public pop(): T | undefined {
    if (this.isEmpty) return undefined;

    this.counter--;
    const element = this.elements[this.counter];
    delete this.elements[this.counter];

    return element;
  }

  public get isEmpty(): boolean {
    return this.counter === 0;
  }

  public get length(): number {
    return this.counter;
  }

  public showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

// Here the type will not be inferred automatically
const stack = new Stack<number>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.showStack();

while (!stack.isEmpty) {
  console.log(stack.pop());
}
