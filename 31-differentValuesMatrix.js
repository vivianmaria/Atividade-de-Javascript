const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio31() {
  const matrix = matrixGenerator(30, 30)
  const valueToCompare = 5
  const rows = matrix.length
  const columns = matrix[0].length
  let count = 0

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      const element = matrix[i][j]
      if (element === valueToCompare) {
        count++
        matrix[i].splice(j, 1)
      }
    }
  }

  console.log()
  console.table(matrix)
  console.log()
  console.log(`O numero de valores iguais a ${valueToCompare} foi de: ${count}`)
}

module.exports = exercicio31
