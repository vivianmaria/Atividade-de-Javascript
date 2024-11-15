function exercicio48() {
  const inventarioLojaA = {
    "camisetas": 100,
    "calças": 50,
    "sapatos": 80,
    "bonés": 120,
    "meias": 200,
  }

  const inventarioLojaB = {
    "camisetas": 120,
    "calças": 40,
    "sapatos": 90,
    "jaquetas": 60,
    "meias": 180,
  }

  function combineObjects(obj1, obj2) {
    const obj = { ...inventarioLojaA }

    for (const key in inventarioLojaB) {
      if (obj[key]) {
        obj[key] += inventarioLojaB[key]
      } else {
        obj[key] = inventarioLojaB[key]
      }
    }

    return obj
  }

  const combinedObjects = combineObjects(inventarioLojaA, inventarioLojaB)

  console.log()
  console.log("Inventario loja A")
  console.table(inventarioLojaA)
  console.log("Inventario loja B")
  console.table(inventarioLojaB)
  console.log("Inventario combinado")
  console.table(combinedObjects)
}

module.exports = exercicio48
