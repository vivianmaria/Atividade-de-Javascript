const prompt = require("prompt-sync")()

function exercicio7() {
  const carType = prompt("Escolha o tipo de carro 1-populares 2-luxo: ")
  const days = parseInt(prompt("Digite o número de dias de aluguel: "))
  const distance = parseFloat(
    prompt("Digite o número de kilometros percorridos: ")
  )
  let price = 0

  if (
    isNaN(distance) ||
    (carType !== "1" &&
      carType !== "2" &&
      carType !== "populares" &&
      carType !== "luxo") ||
    distance < 0 ||
    isNaN(days) ||
    days <= 0
  ) {
    return console.log("Digite valores válidos!")
  }

  if (carType === "1" || carType === "populares") {
    const valuePerKilometer = distance <= 100 ? 0.2 : 0.1
    price = valuePerKilometer * distance + days * 90
  }
  if (carType === "2" || carType === "luxo") {
    const valuePerKilometer = distance <= 200 ? 0.3 : 0.25
    price = valuePerKilometer * distance + days * 150
  }
  console.log()
  return console.log(`O preço a ser pago é de R$ ${price.toFixed(2)}`)
}

module.exports = exercicio7
