const colors = {
  red: 'red',
  green: 'green',
  blue: 'blue',
};

export type Colors = typeof colors;
export type ColorKeys = keyof Colors;

function translateColor(color: ColorKeys, colors: Colors): string {
  return colors[color];
}

console.log(translateColor('red', colors));
