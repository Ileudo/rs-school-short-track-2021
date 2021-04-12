/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str === '') return '';
  const arr = str.split('');
  let result = '';
  let counter = 1;
  let prev;
  arr.reduce((acc, current) => {
    prev = acc;
    if (current === prev) {
      counter += 1;
    } else {
      if (counter > 1) { result += `${counter}${prev}`; } else { result += `${prev}`; }
      counter = 1;
    }
    prev = current;
    return prev;
  });
  if (counter > 1) { result += `${counter}${prev}`; } else { result += `${prev}`; }
  return result;
}
module.exports = encodeLine;
