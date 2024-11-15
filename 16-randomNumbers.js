function exercicio16() {
  const numbersList = []

  for (let index = 0; index < 20; index++) {
    const randomNumber = Math.floor(Math.random() * 100)
    numbersList.push(randomNumber)
  }
  const sortedNumbers = [...numbersList].sort((a, b) => a - b)
  console.log(`Os números gerados foram: `, ...numbersList)
  console.log(`Os numeros ordenados são: `, ...sortedNumbers)
}

module.exports = exercicio16
