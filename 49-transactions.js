function exercicio49() {
  const transacoesFinanceiras = [
    {
      id: 1,
      valor: 100.5,
      data: "2024-05-01",
      categoria: "Alimentação",
    },
    {
      id: 2,
      valor: 45.75,
      data: "2024-05-02",
      categoria: "Transporte",
    },
    {
      id: 3,
      valor: 200.0,
      data: "2024-05-03",
      categoria: "Lazer",
    },
    {
      id: 4,
      valor: 80.2,
      data: "2024-05-04",
      categoria: "Alimentação",
    },
    {
      id: 5,
      valor: 150.0,
      data: "2024-05-05",
      categoria: "Compras",
    },
    {
      id: 6,
      valor: 30.0,
      data: "2024-05-06",
      categoria: "Transporte",
    },
    {
      id: 7,
      valor: 120.0,
      data: "2024-05-07",
      categoria: "Lazer",
    },
    {
      id: 8,
      valor: 75.5,
      data: "2024-05-08",
      categoria: "Alimentação",
    },
    {
      id: 9,
      valor: 90.0,
      data: "2024-05-09",
      categoria: "Compras",
    },
    {
      id: 10,
      valor: 50.25,
      data: "2024-05-10",
      categoria: "Transporte",
    },
    {
      id: 11,
      valor: 180.0,
      data: "2024-05-11",
      categoria: "Lazer",
    },
    {
      id: 12,
      valor: 70.8,
      data: "2024-05-12",
      categoria: "Alimentação",
    },
    {
      id: 13,
      valor: 220.0,
      data: "2024-05-13",
      categoria: "Compras",
    },
    {
      id: 14,
      valor: 60.0,
      data: "2024-05-14",
      categoria: "Transporte",
    },
    {
      id: 15,
      valor: 85.4,
      data: "2024-05-15",
      categoria: "Lazer",
    },
  ]

  function categorySum(objectArray) {
    const object = {}

    objectArray.forEach(({ categoria, valor }) => {
      if (object[categoria]) {
        object[categoria] = [...object[categoria], valor]
        object[`subtotal_${categoria}`] += valor
      } else {
        object[categoria] = [valor]
        object[`subtotal_${categoria}`] = valor
      }
    })

    return object
  }

  const transactionsObject = categorySum(transacoesFinanceiras)

  console.log()
  console.log("Objeto com as transações")
  console.table(transactionsObject)
  console.log()
}

module.exports = exercicio49
