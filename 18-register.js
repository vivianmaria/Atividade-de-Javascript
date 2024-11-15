const prompt = require("prompt-sync")()

function exercicio18() {
  let register = {
    nome: "",
    cargo: "",
    salario: 0,
  }

  const name = prompt("Digite o nome do funcionário: ")
  const role = prompt("Digite o cargo do funcionário: ")
  const salary = parseFloat(prompt("Digite o salário do funcionário: "))

  if (isNaN(salary) || salary < 0) {
    console.log()
    return console.log("Digite valores válidos!")
  }
  register["nome"] = name
  register["cargo"] = role
  register["salario"] = salary

  console.log("As informações do funcionário são:")
  console.log()
  console.log(`Nome: ${register.nome}`)
  console.log(`Cargo: ${register.cargo}`)
  console.log(`Salario: ${register.salario}`)
}

module.exports = exercicio18
