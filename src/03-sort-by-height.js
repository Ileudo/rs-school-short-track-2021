/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const arr1 = [];
  arr.forEach((elm, index) => {
    if (elm === -1) {
      arr1.push(index);
    }
  });
  const arr2 = arr.filter((elm) => elm !== -1).sort((a, b) => a - b);
  arr1.forEach((elm) => arr2.splice(elm, 0, -1));
  return arr2;
}

module.exports = sortByHeight;
