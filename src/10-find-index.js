/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */

function findIndex(array, value) {
  let start = 0;
  let end = array.length - 1;
  while (start <= end) {
    const pivot = Math.floor((start + end) / 2);
    if (value === array[pivot]) return pivot;
    if (value > array[pivot]) start = pivot + 1;
    if (value < array[pivot]) end = pivot - 1;
  }
  return -1;
}
module.exports = findIndex;
