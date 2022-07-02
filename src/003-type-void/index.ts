/* eslint-disable */
function withoutReturn(...args: string[]): void {
  console.log(args.join(' '));
}

const person = {
  name: 'Joaquim',
  lastname: 'Gregorio',
  showName(): void {
    console.log(this.name + ' ' + this.lastname);
  },
};

export { person }; // export because we cannot redeclare block-scoped variable 'person'
