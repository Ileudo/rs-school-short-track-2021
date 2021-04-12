/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const dnsSeparate = [];
  const result = {};
  let dnsFull = '';
  for (let i = 0; i < domains.length; i++) {
    dnsSeparate.push(domains[i].split('.').reverse());
  }
  for (let i = 0; i < domains.length; i++) {
    for (let k = 0; k < dnsSeparate[i].length; k++) {
      dnsFull += `.${dnsSeparate[i][k]}`;
      if (result[dnsFull]) {
        result[dnsFull] += 1;
      } else {
        result[dnsFull] = 1;
      }
    }
    dnsFull = '';
  }
  return result;
}
module.exports = getDNSStats;
