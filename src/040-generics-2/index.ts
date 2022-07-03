const numbers: Array<number> = [1, 2, 3, 4, 5, 6];
console.log(numbers);

async function promiseAsync() {
  return 1;
}

promiseAsync().then((result) => console.log(result + 1));

function myPromise(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

myPromise().then((result) => console.log(result + 1));
