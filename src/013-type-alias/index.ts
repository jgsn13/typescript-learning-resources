type Age = number;
type Person = {
  readonly name: string;
  age: Age;
  salary: number;
  preferredColor?: PreferredColor;
};
type RGBColor = 'RED' | 'GREEN' | 'BLUE';
type CMYKColor = 'CYAN' | 'MAGENTA' | 'YELLOW' | 'BLACK';
type PreferredColor = RGBColor | CMYKColor;

export const person: Person = {
  name: 'Joaquim',
  age: 19,
  salary: 15_000_000,
};

export function setPreferredColor(
  person: Person,
  color: PreferredColor
): Person {
  return { ...person, preferredColor: color };
}

console.log(setPreferredColor(person, 'CYAN'));
console.log(person);
