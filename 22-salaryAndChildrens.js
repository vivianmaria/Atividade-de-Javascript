const data = [
  { salary: 1000, numOfChildrens: 2 },
  { salary: 1500, numOfChildrens: 1 },
  { salary: 800, numOfChildrens: 3 },
  { salary: 2000, numOfChildrens: 2 },
  { salary: 300, numOfChildrens: 0 },
  { salary: 1200, numOfChildrens: 2 },
  { salary: 500, numOfChildrens: 1 },
  { salary: 250, numOfChildrens: 4 },
  { salary: 150, numOfChildrens: 3 },
  { salary: 400, numOfChildrens: 2 },
]

function exercicio22() {
  let biggestSalary = 0
  let numberOfLessThan350 = 0
  let sumSalary = 0
  let sumChildren = 0

  const dataLength = data.length

  for (let index = 0; index < dataLength; index++) {
    const { salary, numOfChildrens } = data[index]

    if (salary <= 350) {
      numberOfLessThan350++
    }
    if (biggestSalary < salary) {
      biggestSalary = salary
    }

    sumChildren += numOfChildrens
    sumSalary += salary
  }

  console.log()
  console.log(
    `A média de salário da população é de R$ ${(sumSalary / dataLength).toFixed(
      2
    )}`
  )
  console.log(
    `A média de número de filhos da população é de ${(
      sumChildren / dataLength
    ).toFixed(2)} filho(s)`
  )
  console.log(`O maior salário é de R$ ${biggestSalary}`)
  console.log(
    `O percentual de pessoas com salário até R$ 350 é de ${(
      (numberOfLessThan350 / dataLength) *
      100
    ).toFixed(2)}%`
  )
}

module.exports = exercicio22
