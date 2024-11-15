function exercicio42() {
  const objeto = {
    nome: "João",
    idade: 30,
    cidade: "São Paulo",
    interesses: ["programação", "música", "viagem"],
    string: "alguma coisa",
    numero: 42,
    array: [1, 2, 4, 5],
    vetor: [true, false, true],
  }

  function newObjectWithArrays(object) {
    const newObject = {}

    for (let key in objeto) {
      if (Array.isArray(objeto[key])) newObject[key] = objeto[key]
    }
    return newObject
  }

  const novoObjeto = newObjectWithArrays(objeto)

  console.log()
  console.log(`O novo objeto contendo apenas propriedades que são arrays`)
  console.log(JSON.stringify(novoObjeto))
  console.log()
}

module.exports = exercicio42
