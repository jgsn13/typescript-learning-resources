// 'protected' allows access to the class member from itself and any classes that inherit it

export class Employee {
  constructor(public readonly name: string, public readonly lastname: string) {}
}

export class Company {
  protected readonly employees: Employee[] = [];
}

export class Google extends Company {
  public popEmployee(): Employee | null {
    const employee = this.employees.pop();
    if (employee) return employee;
    return null;
  }
}
