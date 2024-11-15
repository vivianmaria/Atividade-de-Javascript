const prompt = require("prompt-sync")()

function exercicio19() {
  const times = []

  console.log("Digite 5 horários no formato HH.MM.SS")
  for (let index = 1; index <= 5; index++) {
    const time = prompt(`Digite o ${index} horário: `)
    times.push(time)
  }

  for (let index = 0; index < 5; index++) {
    const element = times[index]
    console.log()
    const splitedElement = element.split(".")
    if (splitedElement.length !== 3) {
      console.log(`O horário ${element} não está dentro dos padrões exigidos!`)
    } else {
      const hour = splitedElement[0]
      const minutes = splitedElement[1]
      const seconds = splitedElement[2]
      let error = false
      if (hour < 0 || hour > 24 || isNaN(Number(hour))) {
        console.log(`A hora ${hour} não está dentro dos padrões!`)
        error = true
      }
      if (minutes < 0 || minutes > 59 || isNaN(Number(minutes))) {
        console.log(`O minuto ${minutes} não está dentro dos padrões!`)
        error = true
      }
      if (seconds < 0 || seconds > 59 || isNaN(Number(seconds))) {
        console.log(`O segundo ${seconds} não está dentro dos padrões!`)
        error = true
      }

      if (!error) {
        console.log(
          `O horário ${hour} hora(s) ${minutes} minuto(s) ${seconds} segundo(s) está dentro dos padrões!`
        )
      }
    }
  }
}

module.exports = exercicio19
