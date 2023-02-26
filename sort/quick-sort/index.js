const { swapNumbers, generateNumbers, isSorted } = require('../../utils');

function partition(arr, left, right) {
  const middle = Math.floor((left + right) / 2);
  let x = arr[middle], up = right, down = left;
  while (down < up) {
    while ((arr[down] <= x) && (down < right)) {
      down++;
    }
    while (arr[up] > x) {
      up--;
    }
    if (down < up) {
      swapNumbers(arr, down, up);
    }
  }

  arr[left] = arr[up];
  arr[up] = x;
  return up;
}
function quickSort(arr, left, right) {
  let i;
  if (right > left) {
    i = partition(arr, left, right);
    quickSort(arr, left, i - 1);
    quickSort(arr, i + 1, right);
  }
}
const numberArray = generateNumbers(__dirname, 1000 * 1000);


quickSort(numberArray, 0, numberArray.length - 1);
console.log('Is the array sorted?', isSorted(numberArray));