const { generateNumbers } = require('../../utils');

const SEARCH_THIS = 42;
console.log('We will search this number', { number: SEARCH_THIS });

const numberArray = generateNumbers(__dirname);
numberArray.push(SEARCH_THIS);

let i = 0;

while (numberArray[i] !== SEARCH_THIS) {
  i++;
}

if (i === numberArray.length - 1) {
  console.log('Number was not found');
} else {
  console.log('Number was found at index: ', i);
}