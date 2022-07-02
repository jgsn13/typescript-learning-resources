/* eslint-disable */
const objectA: {
  keyA: string;
  readonly keyB: string; // cannot change 'keyB' value
  keyC?: string;
  [key: string]: unknown; // Index signarute
} = {
  keyA: 'Joaquim',
  keyB: 'Gregorio',
};

objectA.keyD = 'Some value';
