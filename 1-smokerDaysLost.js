const prompt = require("prompt-sync")()

function exercicio1() {
  const cigarettesPerDay = parseFloat(
    prompt("Digite a quantidade de cigarros fumados por dia: ")
  )
  const years = parseFloat(prompt("Digite a quantidade de anos fumando: "))

  if (
    isNaN(cigarettesPerDay) ||
    isNaN(years) ||
    cigarettesPerDay < 0 ||
    years < 0
  ) {
    return console.log("Digite números válidos!")
  }

  const numberOfCigarettes = cigarettesPerDay * 365 * years
  const lostMinutes = numberOfCigarettes * 10
  const lostDays = lostMinutes / 60 / 24
  console.log()

  return console.log(
    `O fumante perderá um total de dias de ${lostDays.toFixed(2)}`
  )
}

module.exports = exercicio1
