// You can implement types in classes if you don't need 'private' or
// 'protected' encapsulation

type NameType = {
  name: string;
};

type LastnameType = {
  lastname: string;
};

type FullNameType = {
  fullName(): string;
};

export class Person implements NameType, LastnameType, FullNameType {
  constructor(public name: string, public lastname: string) {}

  public fullName(): string {
    return `${this.name} ${this.lastname}`;
  }
}
