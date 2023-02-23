const { generateNumbers, isSorted } = require('../../utils');

const numberArray = generateNumbers(__dirname);


for (let x = 1; x < numberArray.length; x++) {
  let aux = numberArray[x];
  let y = x - 1;
  while (y >= 0 && aux < numberArray[y]) {
    numberArray[y + 1] = numberArray[y];
    y = y - 1;
  }

  numberArray[y + 1] = aux;
}

console.log({ endArray: numberArray });

console.log('Is the array sorted?', isSorted(numberArray));