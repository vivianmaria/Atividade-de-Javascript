function exercicio25() {
  const rows = 15
  const columns = 20
  const matrix = []
  for (let i = 0; i < rows; i++) {
    const array = []
    for (let j = 0; j < columns; j++) {
      const randomNumber = Math.floor(Math.random() * 21) - 10 //-10-10 (Math.random()*(max-min+1))+min
      array.push(randomNumber)
    }
    matrix.push(array)
  }

  const result = []
  const matrixLength = matrix.length
  const rowLength = matrix[0].length
  for (let i = 0; i < rowLength; i++) {
    let sum = 0
    for (let j = 0; j < matrixLength; j++) {
      sum += matrix[j][i]
    }
    result.push(sum)
  }

  console.table(matrix)
  console.log()
  console.log(`Vetor com os números negativos por linha:`)
  console.table(result)
}

module.exports = exercicio25
