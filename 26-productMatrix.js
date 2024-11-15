const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio26() {
  const matrixA = matrixGenerator(3, 5)
  const matrixB = matrixGenerator(5, 3)

  const rowsA = matrixA.length
  const columnsB = matrixB[0].length
  const rowsB = matrixB.length
  const productMatrix = []

  for (let i = 0; i < rowsA; i++) {
    const array = []

    for (let j = 0; j < columnsB; j++) {
      let sum = 0

      for (let k = 0; k < rowsB; k++) {
        sum += matrixA[i][k] * matrixB[k][j]
      }
      array.push(sum)
    }
    productMatrix.push(array)
  }
  console.log()
  console.table(matrixA)
  console.table(matrixB)
  console.log("A matriz produto é:")
  console.table(productMatrix)
}

module.exports = exercicio26
