function exercicio44() {
  const obj = {
    nome: "Alice",
    idade: 25,
    cidade: "Rio de Janeiro",
    interesses: ["programação", "música", "viagem"],
    salario: 2000,
    nulo: null,
    indefinido: undefined,
    booleano: true,
  }
  let count = 0

  for (let key in obj) {
    if (typeof obj[key] === "string") {
      count++
    }
  }

  console.log()
  console.log(`Objeto`)
  console.table(obj)
  console.log()
  console.log(`Número de propriedades do tipo string: ${count}`)
}

module.exports = exercicio44
