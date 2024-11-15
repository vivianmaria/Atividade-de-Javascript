function exercicio24() {
  const rows = 6
  const columns = 8
  const matrix = []
  for (let i = 0; i < rows; i++) {
    const array = []
    for (let j = 0; j < columns; j++) {
      const randomNumber = Math.floor(Math.random() * 201) - 100 //-100-100 (Math.random()*(max-min+1))+min
      array.push(randomNumber)
    }
    matrix.push(array)
  }

  const result = []
  const matrixLength = matrix.length
  for (let index = 0; index < matrixLength; index++) {
    const element = matrix[index]
    let count = 0
    element.forEach((number) => {
      if (number < 0) count++
    })
    result.push(count)
  }

  console.table(matrix)
  console.log()
  console.log(`Vetor com os números negativos por linha:`)
  console.table(result)
}

module.exports = exercicio24
