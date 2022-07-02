export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string
  ) {}

  public getAge(): number {
    return this.age;
  }

  public getCPF(): string {
    return this.cpf;
  }

  public getFullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}

export class Student extends Person {
  // polymorphism
  public getFullName(): string {
    return `Student name: ${this.name} ${this.lastname}`;
  }
}

export class Client extends Person {
  // polymorphism
  public getFullName(): string {
    return `Client name: ${this.name} ${this.lastname}`;
  }
}
