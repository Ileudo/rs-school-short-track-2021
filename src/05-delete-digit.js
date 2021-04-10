/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = n.toString().split('');
  arr.map((elm) => Number(elm));
  let min = arr[0];
  arr.forEach((elm) => {
    if (min > elm) min = elm;
  });
  const indexOfMin = arr.indexOf(min, 0);
  arr.splice(indexOfMin, 1);
  const result = +arr.join('') * 1;
  return result;
}

module.exports = deleteDigit;
