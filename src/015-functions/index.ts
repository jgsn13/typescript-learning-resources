type MapStringCallback = (str: string) => string;

export function mapStrings(
  array: string[],
  callbackFn: MapStringCallback
): string[] {
  const newArray: string[] = [];
  for (let i = 0; i < array.length; i++) {
    newArray.push(callbackFn(array[i]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];
console.log(mapStrings(abc, (item) => item.toUpperCase()));
