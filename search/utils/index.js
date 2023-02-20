const fs = require('node:fs');

const generateNumbers = (dirname, maxNumbers = 1000) => {
  const numberArray = [...Array(maxNumbers)].map(e => Math.floor(Math.random() * maxNumbers));

  fs.writeFileSync(`${dirname}/numbers.txt`, numberArray.toString());
  console.log('This is the array that will be used:', { array: numberArray });

  return numberArray;
};

module.exports = {
  generateNumbers
};