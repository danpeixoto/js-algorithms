
const { swapNumbers, generateNumbers, isSorted } = require('../../utils');

const numberArray = generateNumbers(__dirname);
const size = numberArray.length;

let h, aux;
for (h = 1; h < size; h = 3 * h + 1);

while (h > 0) {
  h = Math.trunc((h - 1) / 3);
  for (let i = h; i < size; i++) {
    aux = numberArray[i];
    let j = i;
    while (numberArray[j - h] > aux) {
      numberArray[j] = numberArray[j - h];
      j -= h;
      if (j < h) break;
    }
    numberArray[j] = aux;
  }
}
console.log(numberArray);
console.log('Is the arrya sorted?', isSorted(numberArray));