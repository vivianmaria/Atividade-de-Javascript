const arrayGenerator = require("./helpers/arrayGenerator")
const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio40() {
  const rows = 50
  const columns = 5
  const template = arrayGenerator(columns, 0, 3)
  const bettors = matrixGenerator(rows, columns, 0, 3)
  let winners = 0

  for (let i = 0; i < rows; i++) {
    let hits = 0
    const newTemplate = [...template]
    for (let j = 0; j < columns; j++) {
      const newTemplateLength = newTemplate.length
      const numberBettor = bettors[i][j]
      for (let k = 0; k < newTemplateLength; k++) {
        if (numberBettor === newTemplate[k]) {
          hits++
          newTemplate.splice(k, 1)
          break
        }
      }
    }
    if (hits === columns) {
      console.log(`Aposta ${i + 1}: GANHADOR.`)
      winners++
    }
  }
  if (winners === 0) {
    console.log(`Não houve nenhum ganhador!`)
  }
}

module.exports = exercicio40
