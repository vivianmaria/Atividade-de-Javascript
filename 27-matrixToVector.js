const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio27() {
  const matrix = matrixGenerator(6, 6)
  const valueA = 3

  const rows = matrix.length
  const columns = matrix[0].length

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      matrix[i][j] *= valueA
    }
  }

  const vector = matrix.flat()
  console.table(vector)
}

module.exports = exercicio27
