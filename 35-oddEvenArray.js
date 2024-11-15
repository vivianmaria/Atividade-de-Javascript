const arrayGenerator = require("./helpers/arrayGenerator")

function exercicio35() {
  const array = arrayGenerator(30)
  let oddArray = []
  let evenArray = []

  for (const number of array) {
    if (number % 2 === 0) {
      if (evenArray.length >= 5) {
        console.log(`Array de números pares: `, evenArray)
        evenArray = []
      } else {
        evenArray.push(number)
      }
    } else {
      if (oddArray.length >= 5) {
        console.log(`Array de números ímpar: `, oddArray)
        oddArray = []
      } else {
        oddArray.push(number)
      }
    }
  }

  if (oddArray.length > 0) {
    console.log(`Array de números ímpar: `, oddArray)
  }
  if (evenArray.length > 0) {
    console.log(`Array de números pares: `, evenArray)
  }
}

module.exports = exercicio35
