const { swapNumbers, generateNumbers, isSorted } = require('../../utils');

const numberArray = generateNumbers(__dirname);
const size = numberArray.length;

function merge(arr, left, mid, right) {
  let i, j, k;
  let s1 = mid - left + 1;
  let s2 = right - mid;

  let left_arr = [], right_arr = [];

  for (i = 0; i < s1; i++)
    left_arr[i] = arr[left + i];

  for (j = 0; j < s2; j++)
    right_arr[j] = arr[mid + 1 + j];

  i = 0;
  j = 0;
  k = left;
  while (i < s1 && j < s2) {
    if (left_arr[i] <= right_arr[j]) {
      arr[k] = left_arr[i];
      i++;
    }
    else {
      arr[k] = right_arr[j];
      j++;
    }
    k++;
  }
  while (i < s1) {
    arr[k] = left_arr[i];
    i++;
    k++;
  }
  while (j < s2) {
    arr[k] = right_arr[j];
    j++;
    k++;
  }
}

function mergeSort(arr, start, end) {
  let middle;
  if (start < end) {
    middle = Math.floor((start + end) / 2);
    mergeSort(arr, start, middle);
    mergeSort(arr, middle + 1, end);
    merge(arr, start, middle, end);
    console.log(start, end);
  }
}

mergeSort(numberArray, 0, size - 1);

console.log('Is the array sorted?', isSorted(numberArray));
// https://www.scaler.com/topics/merge-sort-in-c/