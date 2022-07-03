export type Vehicle = {
  brand: string;
  year: string;
};

export type Car = {
  brand: Vehicle['brand'];
  year: Vehicle['year'];
  name: string;
};
