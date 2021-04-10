/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  const result = [];
  let newElm;
  names.forEach((elm) => {
    let t = 1;
    newElm = elm;
    while (result.includes(newElm)) { newElm = `${elm}(${t})`; t++; }
    result.push(newElm);
  });
  return result;
}
module.exports = renameFiles;
