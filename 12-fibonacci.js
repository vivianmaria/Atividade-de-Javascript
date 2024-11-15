function exercicio12() {
  let lastNumber = 1
  let numberBeforeLastNumber = 1

  let result = [1, 1]

  for (let index = 0; index < 8; index++) {
    const number = lastNumber + numberBeforeLastNumber
    lastNumber = numberBeforeLastNumber
    numberBeforeLastNumber = number
    result.push(number)
  }
  console.log(...result)
}

module.exports = exercicio12
