function exercicio47() {
  const sale = {
    valor1: 1000,
    valor2: 123,
    valor3: 345,
    valor4: 2344,
    valor5: 567,
    valor6: 3456,
    valor7: 784,
  }

  const double = (value) => value * 2

  function objectTransform(object, callback) {
    const obj = { ...object }

    for (let key in obj) {
      obj[key] = callback(obj[key])
    }

    return obj
  }

  const newObject = objectTransform(sale, double)

  console.log()
  console.log("Objeto sem alteração")
  console.table(sale)
  console.log("Objeto alterado")
  console.table(newObject)
  console.log()
}

module.exports = exercicio47
