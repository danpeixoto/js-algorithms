const { generateNumbers } = require('../utils');
const SEARCH_THIS = 1;
console.log('We will search this number', { number: SEARCH_THIS });

const numberArray = generateNumbers(__dirname);

let hasFound = false;
let pos = 0;

do {

  if (!(numberArray[pos] === SEARCH_THIS)) {
    pos++;
  } else {
    hasFound = true;
  }

} while (!hasFound && pos < numberArray.length);


if (hasFound) {
  console.log('The number is at pos:', pos);
} else {
  console.log('Number not found');
}