const arrayGenerator = require("./helpers/arrayGenerator")

function exercicio38() {
  const randomNumber = Math.floor(Math.random() * (5 - 1 + 1)) + 1
  const array = arrayGenerator(6)

  if (randomNumber === 1) {
    const sum = array.reduce((acc, cur) => acc + cur, 0)

    console.log(`Operação ${randomNumber}-soma dos elementos`)
    console.log(array)
    console.log(`A soma dos elementos foi de ${sum}`)
  }

  if (randomNumber === 2) {
    const product = array.reduce((acc, cur) => acc * cur, 1)

    console.log(`Operação ${randomNumber}-produto dos elementos`)
    console.log(array)
    console.log(`A produto dos elementos foi de ${product}`)
  }

  if (randomNumber === 3) {
    const sum = array.reduce((acc, cur) => acc + cur, 1)
    const length = array.length

    console.log(`Operação ${randomNumber}-média dos elementos`)
    console.log(array)
    console.log(`A média dos elementos foi de ${(sum / length).toFixed(2)}`)
  }
  if (randomNumber === 4) {
    const sorted = [...array].sort((a, b) => a - b)
    console.log(`Operação ${randomNumber}-ordene em ordem crescente`)
    console.log(array)
    console.log(`Elementos ordenados: `, sorted)
  }
  if (randomNumber === 5) {
    console.log(`Operação ${randomNumber}-mostrar vetor`)
    console.log("Vetor", array)
  }
}

module.exports = exercicio38
