const prompt = require("prompt-sync")()

function exercicio2() {
  const carVelocity = Math.floor(
    parseFloat(prompt("Digite a velocidade do carro em (Km/h): "))
  )

  if (isNaN(carVelocity) || carVelocity < 0) {
    return console.log("Digite uma velocidade válida!")
  }

  if (carVelocity <= 80) {
    return console.log("Velocidade permitida!")
  } else {
    const ticketValue = (carVelocity - 80) * 5
    return console.log(
      `Velocidade acima do permitido, você receberá uma multa de: R$ ${ticketValue}`
    )
  }
}

module.exports = exercicio2
