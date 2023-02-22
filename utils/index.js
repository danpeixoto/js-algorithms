const fs = require('node:fs');

const generateNumbers = (dirname, maxNumbers = 1000, maxValue = 1000) => {
  const numberArray = [...Array(maxNumbers)].map(e => Math.floor(Math.random() * maxValue));

  fs.writeFileSync(`${dirname}/numbers.txt`, numberArray.toString());
  console.log('This is the array that will be used:', { array: numberArray });

  return numberArray;
};

const swapNumbers = (arr, x, y) => {
  let temp = arr[x];
  arr[x] = arr[y];
  arr[y] = temp;
};

const isSorted = (arr) => {
  for (let i = 0; i < (arr.length - 1); i++) {
    if (arr[i] > arr[i + 1]) {
      return false;
    }
  }

  return true;
};

module.exports = {
  generateNumbers,
  swapNumbers,
  isSorted
};