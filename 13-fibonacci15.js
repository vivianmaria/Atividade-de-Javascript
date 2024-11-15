function exercicio13() {
  let result = []

  for (let index = 0; index < 15; index++) {
    if (result.length < 2) {
      result.push(1)
    } else {
      const sum = result[index - 2] + result[index - 1]
      result.push(sum)
    }
  }

  console.log(...result)
}

module.exports = exercicio13
