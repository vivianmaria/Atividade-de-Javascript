const prompt = require("prompt-sync")()

function exercicio11() {
  let initialValue = parseFloat(prompt("Digite o primeiro termo da PA: "))
  const ratio = parseFloat(prompt("Digite a razão da PA: "))

  if (isNaN(initialValue) || isNaN(ratio)) {
    return console.log("Digite valores válidos!")
  }
  let sum = initialValue
  const values = [initialValue]

  for (let i = 0; i < 9; i++) {
    initialValue += ratio
    sum += initialValue
    values.push(initialValue)
  }

  console.log(`A lista dos 10 primeiros elementos da PA é: `, ...values)
  console.log(`A soma dos elementos é: ${sum}`)
}

module.exports = exercicio11
