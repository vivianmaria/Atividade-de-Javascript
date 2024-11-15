function exercicio43() {
  const obj1 = {
    nome: "Alice",
    idade: 25,
    cidade: "Rio de Janeiro",
    interesses: ["programação", "música", "viagem"],
    salario: 2000,
  }

  const obj2 = {
    nome: "Bob",
    cidade: "São Paulo",
    interesses: ["esportes", "tecnologia"],
    profissao: "Engenheiro",
  }

  function joinObjects(obj1, obj2) {
    return { ...obj1, ...obj2 }
  }
  const obj3 = joinObjects(obj1, obj2)

  console.log("Objeto 1")
  console.table(obj1)
  console.log("Objeto 2")
  console.table(obj2)
  console.log("Objeto resultante")
  console.table(obj3)
}

module.exports = exercicio43
