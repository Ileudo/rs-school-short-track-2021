/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const arr1 = s1.split('');
  const arr2 = s2.split('');
  const arr3 = [];
  arr1.forEach((elm) => {
    const index2 = arr2.indexOf(elm);
    if (index2 !== -1) {
      arr3.push(elm);
      arr2.splice(index2, 1);
    }
  });
  return arr3.length;
}
module.exports = getCommonCharacterCount;
