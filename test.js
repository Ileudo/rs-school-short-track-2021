function getMatrixElementsSum(matrix) {
  let acc = 0;
  for (let y = 0; y < matrix.length; y++) {
    for (let x = 0; x < matrix[y].length; x++) {
      if (y === 0) {
        acc += matrix[y][x];
      } else if (y !== 0 && matrix[y - 1][x] !== 0) {
        acc += matrix[y][x];
      }
    }
  }
  return acc;
}

const matr = [[1, 2, 3, 4],
[0, 5, 0, 0],
[2, 0, 3, 3],
]
console.log(getMatrixElementsSum(matr));
module.exports = getMatrixElementsSum;

