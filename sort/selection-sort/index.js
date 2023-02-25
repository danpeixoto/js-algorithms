const { swapNumbers, generateNumbers, isSorted } = require('../../utils');

const numberArray = generateNumbers(__dirname);

for (let x = 0; x < numberArray.length; x++) {
  let small = x;
  for (let y = x + 1; y < numberArray.length; y++)
    numberArray[y] < numberArray[small] ? small = y : 0;

  swapNumbers(numberArray, x, small);
}

console.log(numberArray);

console.log('Is the arrya sorted?', isSorted(numberArray));