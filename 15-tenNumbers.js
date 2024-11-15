const prompt = require("prompt-sync")()

function exercicio15() {
  const numbers = []
  console.log("Digite 10 números inteiros")
  for (let index = 1; index <= 10; index++) {
    const number = parseInt(prompt(`Digite o ${index} número: `))
    if (isNaN(number)) {
      index--
      console.log("Digite um número inteiro!")
    } else {
      numbers.push(number)
    }
  }

  const numbersLength = numbers.length

  for (let index = 0; index < numbersLength; index++) {
    const number = numbers[index]

    if (number % 2 === 0) {
      console.log(
        `O numero ${number} é par e está armazenado na posição ${index}.`
      )
    }
  }
}

module.exports = exercicio15
