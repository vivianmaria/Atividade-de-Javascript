function exercicio39() {
  const columns = 100
  const vetorA = []

  for (let index = 0; index < columns; index++) {
    const randomNumber = Math.floor(Math.random() * (2 + 1))
    if (randomNumber === 2) {
      vetorA.push(null)
    } else {
      vetorA.push(randomNumber)
    }
  }

  const vetorB = vetorA.filter((num) => num)

  console.log()
  console.log(`VetorA`)
  console.log(vetorA)
  console.log(`VetorB`)
  console.log(vetorB)
}

module.exports = exercicio39
