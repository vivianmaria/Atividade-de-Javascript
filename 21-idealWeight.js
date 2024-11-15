const prompt = require("prompt-sync")()

function exercicio21() {
  const gender = prompt("Escolha o sexo 1-homem 2-mulher ")
  const height = parseFloat(prompt("Digite a altura em metros: "))

  if (isNaN(height) || height <= 0 || (gender !== "1" && gender !== "2")) {
    return console.log("Digite valores válidos!")
  }
  console.log()
  if (gender === "1") {
    const idealWeight = 72.7 * height - 58
    console.log(
      `O peso ideal para um homem com ${height}m de altura é de ${idealWeight.toFixed(
        2
      )} Kg`
    )
  }
  if (gender === "2") {
    const idealWeight = 62.1 * height - 44.7
    console.log(
      `O peso ideal para uma mulher com ${height}m de altura é de ${idealWeight.toFixed(
        2
      )} Kg`
    )
  }
}

module.exports = exercicio21
