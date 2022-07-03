interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

interface PersonProtocol2<T, U> {
  name: T;
  lastname: T;
  age: U;
}

export const person: PersonProtocol2<string, number> = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};

export const person2: PersonProtocol2<number, number> = {
  name: 666,
  lastname: 333,
  age: 19,
};

export const person3: PersonProtocol = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  age: 19,
};
