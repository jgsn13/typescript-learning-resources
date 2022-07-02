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
}

export class Employee {
  constructor(public readonly name: string, public readonly lastname: string) {}
}
