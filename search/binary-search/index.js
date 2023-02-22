const { generateNumbers } = require('../../utils');

const SEARCH_THIS = 420;
console.log('We will search this number', { number: SEARCH_THIS });

const numberArray = generateNumbers(__dirname);
numberArray.sort((a, b) => a - b);

let r = numberArray.length;
let l = 0, m;
let hasFound = false;

while (l < r) {
  m = Math.floor((l + r) / 2);
  if (numberArray[m] < SEARCH_THIS) {
    l = m + 1;
  } else if (numberArray[m] > SEARCH_THIS) {
    r = m - 1;
  } else if (numberArray[m] === SEARCH_THIS) {
    hasFound = true;
    break;
  }
}


if (hasFound) {
  console.log('The number was found at index:', l);
} else {
  console.log('The number was not found');
}