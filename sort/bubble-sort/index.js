const { generateNumbers, swapNumbers, isSorted } = require('../../utils');

const numberArray = generateNumbers(__dirname);

for (let x = numberArray.length - 1; x > 0; x--) {
  for (let y = 0; y < x; y++) {
    if (numberArray[y] > numberArray[y + 1]) {
      swapNumbers(numberArray, y, y + 1);
    }
  }
}

console.log(numberArray);
console.log('Is the arrya sorted?', isSorted(numberArray));