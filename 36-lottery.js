const arrayGenerator = require("./helpers/arrayGenerator")
const matrixGenerator = require("./helpers/matrixGenerator")

function exercicio36() {
  const min = 1
  const max = 15
  const template = betGenerator(min, max)
  const rows = 100
  const columns = 13
  const bettors = []

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      bettors.push(betGenerator(min, max))
    }
  }

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
    if (hits === 13) {
      console.log(`Apostador ${i + 1}: Parabéns, tu foi o GANHADOR.`)
    } else {
      console.log(`Apostador ${i + 1}: ${hits} acertos.`)
    }
  }
}

module.exports = exercicio36

function betGenerator(min, max) {
  let bet = []
  while (bet.length < 13) {
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min
    if (bet.includes(randomNumber)) continue
    bet.push(randomNumber)
  }
  return bet
}
