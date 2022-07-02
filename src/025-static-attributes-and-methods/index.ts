export class Person {
  public static defaultAge = 0;
  public static defaultCPF = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string
  ) {}

  public defaultMethod(): void {
    console.log(Person.defaultAge, Person.defaultCPF);
  }

  public static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, this.defaultAge, this.defaultCPF);
  }
}

const person1 = new Person('Joaquim', 'Gregorio', 19, '584.069.160-79');
console.log(person1);

const person2 = Person.createPerson('Maria', 'da Silva');
console.log(person2);
person2.defaultMethod();
