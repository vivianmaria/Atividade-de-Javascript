const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio32() {
  const matrix = matrixGenerator(12, 13, -50, 50)

  const rows = matrix.length
  const columns = matrix[0].length

  const higValuesLine = matrix.map((vector) => {
    return vector.reduce((hig, cur) => {
      const absCur = Math.abs(cur)
      if (hig < absCur) {
        return absCur
      } else {
        return hig
      }
    }, 0)
  })
  const changedMatrix = matrix.map((vector, index) =>
    vector.map((number) => Number((number / higValuesLine[index]).toFixed(2)))
  )

  console.log("Matriz original")
  console.table(matrix)
  console.log()
  console.log(`Os maiores valores em módulo de cada linha foram`)
  console.table(higValuesLine)
  console.log()
  console.log("Matriz alterada")
  console.table(changedMatrix)
}

module.exports = exercicio32
