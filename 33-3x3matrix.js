const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio33() {
  const matrix = matrixGenerator(3, 3)

  const rows = matrix.length
  const columns = matrix[0].length
  let secondarySum = 0

  for (let i = 0; i < rows; i++) {
    secondarySum += matrix[i][columns - 1 - i]
  }

  const average = secondarySum / rows
  const newMatrix = matrix.map((array) => array.slice())

  for (let i = 0; i < rows; i++) {
    newMatrix[i][i] = Number((newMatrix[i][i] * average).toFixed(2))
  }

  console.log(`Matriz antes da alteração`)
  console.table(matrix)
  console.log()
  console.log(
    `A soma da diagonal foi de ${secondarySum}, resultando em uma média de: ${average}`
  )
  console.log()
  console.log("Matriz depois da alteração")
  console.table(newMatrix)
}

module.exports = exercicio33
