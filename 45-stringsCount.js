function exercicio45() {
  const randomStrings = [
    "banana",
    "maçã",
    "laranja",
    "abacaxi",
    "uva",
    "morango",
    "abacate",
    "pêssego",
    "limão",
    "melancia",
    "banana",
    "banana",
    "morango",
    "abacate",
    "pêssego",
    "limão",
    "melancia",
    "banana",
    "banana",
    "uva",
    "morango",
    "abacate",
    "pêssego",
    "kiwi",
    "pêssego",
    "limão",
    "melancia",
    "melancia",
    "melancia",
  ]

  const object = {}

  randomStrings.forEach((string) => {
    if (object[string]) {
      object[string]++
    } else {
      object[string] = 1
    }
  })

  console.log("Objeto com a conta das strings")
  console.table(object)
  console.log()
}

module.exports = exercicio45
