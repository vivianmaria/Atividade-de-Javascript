function exercicio23() {
  const matrix = []
  const size = 7
  for (let index = 0; index < size; index++) {
    const array = Array(size).fill(0)
    array[index] = 1
    matrix.push(array)
  }
  console.table(matrix)
}

module.exports = exercicio23
