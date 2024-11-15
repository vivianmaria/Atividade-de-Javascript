const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio34() {
  const matrix = matrixGenerator(5, 5)

  const newMatrix = matrix.map((vector, index, array) => {
    return vector.map((number, _) => {
      const multiplyNumber = number * array[index][index]
      return multiplyNumber
    })
  })
  console.log()
  console.log("Matriz original")
  console.table(matrix)
  console.log()
  console.log("Matriz alterada")
  console.table(newMatrix)
  console.log()
}

module.exports = exercicio34
