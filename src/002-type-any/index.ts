/* eslint-disable */
// NOTE: avoid using type 'any' and implicity type 'any'
function showMessage(msg: any) {
  return msg;
}

const numMessage = showMessage(19);
const stringMessage = showMessage('Joaquim');
const arrayMessage = showMessage([1, 2, 3, 4]);
