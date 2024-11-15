const prompt = require("prompt-sync")()

function exercicio14() {
  const names = []

  console.log("Digite o nome de 7 pessoas")
  for (let index = 1; index <= 7; index++) {
    const name = prompt(`Digite o ${index} nome: `)
    names.push(name)
  }

  for (let index = 6; index >= 0; index--) {
    const name = names[index]
    console.log(`O ${index + 1} digitado foi: ${name}`)
  }
}

module.exports = exercicio14
