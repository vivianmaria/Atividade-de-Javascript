const prompt = require("prompt-sync")()

function exercicio5() {
  const options = {
    1: "pedra",
    2: "papel",
    3: "tesoura",
  }

  let winner = "ninguem"

  do {
    let userChoice = prompt(
      "Escolha uma opção, ou digite o nome: 1-pedra 2-papel 3-tesoura "
    )

    if (
      !options[userChoice] &&
      !(
        userChoice === "pedra" ||
        userChoice === "papel" ||
        userChoice === "tesoura"
      )
    ) {
      console.log("Escolha uma opção válida!")
    } else {
      if (!isNaN(userChoice)) {
        userChoice = options[userChoice]
      }
      const randomNumber = Math.floor(Math.random() * 3) + 1
      const machineChoice = options[randomNumber]

      const result = winnerCheck(userChoice, machineChoice)
      if (result !== "empate") {
        winner = result
        console.log(
          `${result} venceu, sua escolha foi ${userChoice} e a do computador foi ${machineChoice}`
        )
      } else {
        console.log(
          `Esta rodada deu empate, sua escolha foi ${userChoice} e a do computador foi ${machineChoice}, faça outra escolha`
        )
      }
    }
  } while (winner === "ninguem")
}

function winnerCheck(user, machine) {
  if (user === machine) {
    return "empate"
  }

  if (user === "pedra" && machine === "papel") {
    return "O computador"
  }
  if (user === "pedra" && machine === "tesoura") {
    return "Você"
  }
  if (user === "tesoura" && machine === "papel") {
    return "Você"
  }
  if (user === "tesoura" && machine === "pedra") {
    return "O computador"
  }
  if (user === "papel" && machine === "tesoura") {
    return "O computador"
  }
  if (user === "papel" && machine === "pedra") {
    return "Você"
  }
}

module.exports = exercicio5
