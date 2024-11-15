function exercicio41() {
  const pessoa = {
    nome: "caio",
    idade: 26,
  }

  pessoa["email"] = "caio@gmail.com"
  console.log()
  console.log(`Objeto pessoa: ${JSON.stringify(pessoa)}`)
  console.log()
}

module.exports = exercicio41
