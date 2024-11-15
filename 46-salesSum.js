function exercicio46() {
  const sales = [
    { vendedor: "João", valor: 1000 },
    { vendedor: "Maria", valor: 1500 },
    { vendedor: "José", valor: 800 },
    { vendedor: "Ana", valor: 1200 },
    { vendedor: "João", valor: 600 },
    { vendedor: "Maria", valor: 2000 },
    { vendedor: "Pedro", valor: 1800 },
    { vendedor: "Ana", valor: 900 },
    { vendedor: "João", valor: 700 },
    { vendedor: "Maria", valor: 1700 },
    { vendedor: "José", valor: 1100 },
    { vendedor: "Pedro", valor: 1300 },
  ]

  function valuePerSeler(sales) {
    const obj = {}

    sales.forEach(({ vendedor, valor }) => {
      if (obj[vendedor]) {
        obj[vendedor] += valor
      } else {
        obj[vendedor] = valor
      }
    })

    return obj
  }

  const result = valuePerSeler(sales)

  console.log()
  console.log("Objeto sumarizado")
  console.table(result)
}

module.exports = exercicio46
