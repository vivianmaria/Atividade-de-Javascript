const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio28() {
  const matrix = matrixGenerator(10, 10)
  const rows = matrix.length
  const columns = matrix[0].length

  let diagonal = 0
  let upper = 0
  let bottom = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (i !== j || j !== diagonal) {
        const element = matrix[i][j]
        if (j > diagonal) {
          upper += element
        } else {
          bottom += element
        }
      }
    }
    diagonal++
  }

  console.table(matrix)
  console.log()
  console.log(`A soma dos elementos acima da diagonal principal é: ${upper}`)
  console.log(`A soma dos elementos abaixo da diagonal principal é: ${bottom}`)
}

module.exports = exercicio28
