const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio30() {
  const matrix = matrixGenerator(5, 5)
  const rows = matrix.length
  const columns = matrix[0].length
  const SL = []
  const SC = []

  for (let i = 0; i < rows; i++) {
    let rowSum = 0
    let columnSum = 0
    for (let j = 0; j < columns; j++) {
      rowSum += matrix[i][j]
      columnSum += matrix[j][i]
    }
    SL.push(rowSum)
    SC.push(columnSum)
  }

  console.table(matrix)
  console.log()
  console.log(`Vetor com a soma das linhas`)
  console.table(SL)
  console.log(`Vetor com a soma das colunas`)
  console.table(SC)
}

module.exports = exercicio30
