/* eslint-disable */
const x = 10; // since 'x' is a constant, 'x' becomes a literal type
const y: 100 = 100;

let z = 100 as const;

const person = {
  name: 'Joaquim' as const, // literal type (by assertion)
  lastname: 'Gregorio',
};

export function chooseColor(color: 'RED' | 'YELLOW' | 'BLUE'): string {
  return color;
}

console.log(chooseColor('RED'));

// module mode (leave block-scope by expoting something)
export default 1;
