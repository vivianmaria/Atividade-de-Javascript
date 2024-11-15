const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio29() {
  const matrix = matrixGenerator(5, 5)

  const rows = matrix.length
  const columns = matrix[0].length
  let diagonalSum = 0
  let sum = 0
  let rowSum = 0
  let columnSum = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = matrix[i][j]
      sum += element
      if (i === j) {
        diagonalSum += element
      }
      if (i === 4) {
        rowSum += element
      }
      if (j === 2) {
        columnSum += element
      }
    }
  }

  console.table(matrix)
  console.log()
  console.log(`A soma da linha 4 da matriz é: ${rowSum}`)
  console.log(`A soma da coluna 2 da matriz é: ${columnSum}`)
  console.log(`A soma da diagonal principal da matriz é: ${diagonalSum}`)
  console.log(`A soma de todos os elementos da matriz é: ${sum}`)
}

module.exports = exercicio29
