const prompt = require("prompt-sync")()

function exercicio3() {
  const distance = Math.floor(
    parseFloat(prompt("Digite a distância a ser percorrida em (Km): "))
  )

  if (isNaN(distance) || distance < 0) {
    return console.log("Digite uma velocidade válida!")
  }

  let price
  if (distance <= 200) {
    price = distance * 0.5
  } else {
    price = distance * 0.45
  }

  return console.log(`O preço da passagem é de: R$ ${price}`)
}

module.exports = exercicio3
