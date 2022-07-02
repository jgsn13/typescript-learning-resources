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
  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    public classroom: number
  ) {
    super(name, lastname, age, cpf); // get access to the super class
  }

  public getFullName(): string {
    return `Student name: ${super.getFullName()}`;
  }
}

export class Client extends Person {
  public getFullName(): string {
    return `Client name: ${super.getFullName()}`;
  }
}
