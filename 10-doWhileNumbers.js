const prompt = require("prompt-sync")()

function exercicio10() {
  let continueRegistering
  let sum = 0
  let min = +Infinity
  let count = 0
  let evenCount = 0

  do {
    const number = parseInt(prompt("Digite um número: "))

    if (isNaN(number)) {
      console.log("Digite um número válido!")
    } else {
      sum += number
      count++
      if (min > number) {
        min = number
      }
      if (number % 2 === 0) {
        evenCount++
      }
    }

    continueRegistering = prompt(
      "Deseja continuar cadastrando? para continuar de enter ou digite alguma coisa,caso queira sair digite nao "
    )
  } while (continueRegistering !== "nao" && continueRegistering !== "não")

  console.log(`O somatorio entre todos os valores é: ${sum}`)
  console.log(`O menor valor digitado é: ${min}`)
  console.log(`A média entre os valores é: ${(sum / count).toFixed(3)}`)
  return console.log(`O número de valores pares é: ${evenCount} `)
}

module.exports = exercicio10
