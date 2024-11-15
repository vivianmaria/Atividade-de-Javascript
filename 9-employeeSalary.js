const prompt = require("prompt-sync")()

function exercicio9() {
  let continueRegistering = "sim"
  let manSalary = 0
  let womanSalary = 0

  do {
    const gender = prompt("Digite o sexo: 1-homem 2-mulher ")
    const salary = parseFloat(prompt("Digite o salário em reais: "))

    if (
      (gender !== "1" &&
        gender !== "2" &&
        gender !== "homem" &&
        gender !== "mulher") ||
      isNaN(salary) ||
      salary < 0
    ) {
      console.log("Digite valores válidos")
    } else {
      if (gender === "1" || gender === "homem") {
        manSalary += salary
      } else if (gender === "2" || gender === "mulher") {
        womanSalary += salary
      }

      continueRegistering = prompt(
        "Deseja continuar cadastrando? para continuar de enter ou digite alguma coisa,caso queira sair digite nao "
      )
    }
  } while (continueRegistering !== "nao" && continueRegistering !== "não")

  return console.log(
    `O salário pago aos homens é de R$ ${manSalary}, e o pago as mulheres é de R$ ${womanSalary}.`
  )
}

module.exports = exercicio9
