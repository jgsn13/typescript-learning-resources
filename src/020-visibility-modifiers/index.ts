// There are three main visibility modifiers in TypeScript (encapsulation):
// * public - (default) allows access to the class member from anywhere
// * private - only allows access to the class member from within the class
// * protected - allows access to the class member from itself and any classes
// that inherit it

export class Company {
  public readonly name: string;
  private readonly employees: Employee[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  public addEmployee(employee: Employee): void {
    this.employees.push(employee);
  }

  public showEmployees(): void {
    this.employees.forEach((employee) => console.log(employee));
  }

  public getCNPJ(): string {
    return this.cnpj;
  }
}

export class Employee {
  constructor(public readonly name: string, public readonly lastname: string) {}
}
