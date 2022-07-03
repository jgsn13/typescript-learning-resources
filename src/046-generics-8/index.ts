/* Utility types: */

// ---------- Record ----------
const object1: Record<string, string | number> = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};
console.log(object1);

export type PersonProtocol = {
  name?: string;
  lastname?: string;
  age?: number;
};

// ---------- Required ----------
export type PersonRequired = Required<PersonProtocol>;
const object2: PersonRequired = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};
console.log(object2);

// ---------- Partial ----------
export type PersonPartial = Partial<PersonRequired>;
const object3: PersonPartial = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};
console.log(object3);

// ---------- Readonly ----------
export type PersonReadonly = Readonly<PersonPartial>;
const object4: PersonReadonly = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};
// object4.age = 20;
console.log(object4);

// ---------- Pick ----------
export type PersonPick = Pick<PersonPartial, 'name' | 'lastname'>;
const object5: PersonPick = {
  name: 'Joaquim',
  lastname: 'Gregorio',
};
console.log(object5);

// ---------- Extract and Exclude ----------
export type ABC = 'A' | 'B' | 'C';
export type CDE = 'C' | 'D' | 'E';
export type TypeExclude = Exclude<ABC, CDE>; // Type ABC - CDE
export type TypeExtract = Extract<ABC, CDE>; // Type ABC 'intersection' CDE
// Example:
export type AccountMongo = {
  _id: string;
  name: string;
  lastname: string;
  age: number;
};

export type AccountAPI = Pick<
  AccountMongo,
  Exclude<keyof AccountMongo, '_id'>
> & { id: string };

const accountMongo: AccountMongo = {
  _id: 'sjdfja98duaf8sduf9asd8fus8fd',
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};

export function mapAccount(accountMongo: AccountMongo): AccountAPI {
  const { _id, ...data } = accountMongo;
  return { id: _id, ...data };
}

const accountAPI = mapAccount(accountMongo);
console.log('API:\n', accountAPI);
