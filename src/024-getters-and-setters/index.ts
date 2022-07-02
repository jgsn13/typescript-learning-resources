export class Person {
  constructor(private _cpf: string) {}

  public set cpf(cpf: string) {
    // validate cpf or something like that
    this._cpf = cpf;
  }

  public get cpf(): string {
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('000.000.000-00');
person.cpf = '584.069.160-79';
console.log(person.cpf);
