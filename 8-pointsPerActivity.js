const prompt = require("prompt-sync")()

function exercicio8() {
  const activityHours = parseFloat(
    prompt("Digite a quantidade de horas de atividades do mês: ")
  )
  let points = 0

  if (isNaN(activityHours) || activityHours < 0) {
    return console.log("Digite uma quantidade de horas válida!")
  }

  if (activityHours < 10) {
    points = 2 * activityHours
  } else if (activityHours >= 10 && activityHours <= 20) {
    points = 5 * activityHours
  } else if (activityHours > 20) {
    points = 10 * activityHours
  }

  return console.log(
    `O número de pontos desse mês foi de ${points} e o dinheiro adquirido foi de R$ ${
      points * 0.05
    }`
  )
}

module.exports = exercicio8
