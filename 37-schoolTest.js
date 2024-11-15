const arrayGenerator = require("./helpers/arrayGenerator")
const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio37() {
  const rows = 50
  const columns = 20
  const template = arrayGenerator(columns, 0, 1)
  const studentsTests = matrixGenerator(rows, columns, 0, 1)

  for (let i = 0; i < rows; i++) {
    let accerts = 0
    for (let j = 0; j < columns; j++) {
      if (template[j] === studentsTests[i][j]) {
        accerts++
      }
    }
    if (accerts >= 12) {
      console.log(`O aluno ${i + 1} foi APROVADO!`)
    } else {
      console.log(`O aluno ${i + 1} foi REPROVADO!`)
    }
  }
}

module.exports = exercicio37
