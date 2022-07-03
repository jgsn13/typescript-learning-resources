// Optional Chaining (?) and Nullish Coalescing Operator (??)

export type Doc = {
  title: string;
  text: string;
  date?: Date;
};

const doc: Doc = {
  title: 'The title',
  text: 'The text',
  // date: new Date(),
};

console.log(doc.date?.toDateString() ?? 'No date');
console.log(undefined ?? 'No date');
console.log(null ?? 'No date');

console.log(false ?? 'No date');
console.log(0 ?? 'No date');
console.log('' ?? 'No date');
