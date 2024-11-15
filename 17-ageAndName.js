const prompt = require("prompt-sync")()

function exercicio17() {
  console.log("Digite o nome e a idade de 9 pessoas")
  const ages = []
  const names = []

  for (let index = 1; index <= 9; index++) {
    const name = prompt(`Digite o nome da ${index} pessoa: `)
    const age = parseFloat(prompt(`Digite a idade da ${index} pessoa: `))

    if (isNaN(age) || age < 0) {
      console.log("Digite valores válidos!")
      index--
    } else {
      names.push(name)
      ages.push(age)
    }
  }

  console.log("Lista das pessoas menores de idade:")
  for (let index = 0; index < 9; index++) {
    if (ages[index] < 18) {
      console.log(`Nome: ${names[index]}, Idade: ${ages[index]}`)
    }
  }
}

module.exports = exercicio17
