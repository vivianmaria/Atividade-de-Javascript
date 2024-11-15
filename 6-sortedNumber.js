const prompt = require("prompt-sync")()

function exercicio6() {
  const randomNumber = Math.floor(Math.random() * 5) + 1
  let userGuess
  console.log("Tente adivinhar o número")

  do {
    userGuess = parseInt(prompt("Digite um numero de 1 a 5: "))

    if (isNaN(userGuess) || userGuess > 5 || userGuess < 1) {
      console.log("Digite um número válido!")
    } else if (userGuess > randomNumber) {
      console.log(`O número é menor que ${userGuess}`)
    } else if (userGuess < randomNumber) {
      console.log(`O número é maior que ${userGuess}`)
    } else {
      console.log(`Parabéns você acertou! O número era ${userGuess}`)
    }
  } while (userGuess !== randomNumber)
}

module.exports = exercicio6
