const prompt = require("prompt-sync")()

function exercicio4() {
  const firstSide = Math.abs(
    parseFloat(prompt("Digite o tamanho do primeiro segmento de reta: "))
  )
  const secondSide = Math.abs(
    parseFloat(prompt("Digite o tamanho do segundo segmento de reta: "))
  )
  const thirdSide = Math.abs(
    parseFloat(prompt("Digite o tamanho do terceiro segmento de reta: "))
  )

  if (isNaN(firstSide) || isNaN(secondSide) || isNaN(thirdSide)) {
    console.log("Digite números válidos!")
  } else {
    if (
      firstSide + secondSide > thirdSide &&
      firstSide + thirdSide > secondSide &&
      thirdSide + secondSide > firstSide
    ) {
      if (firstSide === secondSide && secondSide === thirdSide) {
        console.log("É possível formar um triângulo equilátero")
      } else if (
        firstSide === secondSide ||
        secondSide === thirdSide ||
        thirdSide === firstSide
      ) {
        console.log("É possível formar um triângulo isósceles")
      } else if (firstSide !== secondSide && secondSide !== thirdSide) {
        console.log("É possível formar um triângulo escaleno")
      }
    } else {
      console.log("Não é possível formar um triângulo")
    }
  }
}

module.exports = exercicio4
