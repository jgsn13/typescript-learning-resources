// Contidional:
const body1 = document.querySelector('body'); // RECOMMENDED
if (body1) body1.style.background = 'green';

// Non-null assertion (!) indicates that the object will not be null:
const body2 = document.querySelector('body')!; // NOT RECOMMENDED
body2.style.background = 'green';

// Type assertion (use only subtypes):
const body3 = document.querySelector('body') as HTMLBodyElement; // RECOMMENDED
if (body3) body3.style.background = 'green';

// HTMLElement
const input = document.querySelector('.input') as HTMLInputElement; // RECOMMENDED
input.value = 'some value';
input.focus();

// Without using subtypes:
const body4 = document.querySelector('body') as unknown as number; // NOT RECOMMENDED
