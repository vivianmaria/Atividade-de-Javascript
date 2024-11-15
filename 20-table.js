const table = [
  { matricula: "MNO345", nome: "Carlos", salarioBruto: 3200 },
  { matricula: "PQR678", nome: "Juliana", salarioBruto: 3700 },
  { matricula: "STU901", nome: "Fernanda", salarioBruto: 2900 },
  { matricula: "VWX234", nome: "Ricardo", salarioBruto: 4100 },
  { matricula: "YZA567", nome: "Sandra", salarioBruto: 3300 },
  { matricula: "BCD890", nome: "Paulo", salarioBruto: 3600 },
  { matricula: "EFG123", nome: "Mariana", salarioBruto: 2750 },
  { matricula: "HIJ456", nome: "Lucas", salarioBruto: 3900 },
  { matricula: "KLM789", nome: "Camila", salarioBruto: 4200 },
  { matricula: "NOP012", nome: "Diego", salarioBruto: 2950 },
  { matricula: "PQR345", nome: "Aline", salarioBruto: 3850 },
  { matricula: "STU678", nome: "Roberto", salarioBruto: 4300 },
  { matricula: "VWX901", nome: "Isabela", salarioBruto: 3100 },
  { matricula: "YZA234", nome: "Marcelo", salarioBruto: 3500 },
  { matricula: "BCD567", nome: "Luana", salarioBruto: 2950 },
  { matricula: "EFG890", nome: "Rafael", salarioBruto: 4100 },
  { matricula: "HIJ123", nome: "Carolina", salarioBruto: 3750 },
  { matricula: "KLM456", nome: "Felipe", salarioBruto: 2800 },
  { matricula: "NOP789", nome: "Patrícia", salarioBruto: 4000 },
  { matricula: "PQR012", nome: "Gabriel", salarioBruto: 3450 },
  { matricula: "STU345", nome: "Tatiane", salarioBruto: 3200 },
  { matricula: "VWX678", nome: "Rodrigo", salarioBruto: 3650 },
  { matricula: "YZA901", nome: "Vanessa", salarioBruto: 3800 },
  { matricula: "BCD234", nome: "Fábio", salarioBruto: 3000 },
  { matricula: "EFG567", nome: "Márcia", salarioBruto: 4100 },
  { matricula: "HIJ890", nome: "Leonardo", salarioBruto: 3300 },
  { matricula: "KLM123", nome: "Laura", salarioBruto: 4400 },
  { matricula: "NOP456", nome: "Antônio", salarioBruto: 2950 },
  { matricula: "PQR789", nome: "Cristina", salarioBruto: 3900 },
  { matricula: "STU012", nome: "Vinícius", salarioBruto: 4250 },
  { matricula: "VWX345", nome: "Carla", salarioBruto: 3150 },
  { matricula: "YZA678", nome: "Thiago", salarioBruto: 3700 },
  { matricula: "BCD901", nome: "Larissa", salarioBruto: 2950 },
  { matricula: "EFG234", nome: "Fernando", salarioBruto: 4150 },
  { matricula: "HIJ567", nome: "Daniela", salarioBruto: 3550 },
  { matricula: "KLM890", nome: "Gustavo", salarioBruto: 3900 },
  { matricula: "NOP123", nome: "Renata", salarioBruto: 3200 },
  { matricula: "PQR456", nome: "Alexandre", salarioBruto: 3650 },
  { matricula: "STU789", nome: "Eduardo", salarioBruto: 3300 },
  { matricula: "VWX012", nome: "Natalia", salarioBruto: 4500 },
  { matricula: "YZA345", nome: "Patricia", salarioBruto: 3050 },
  { matricula: "BCD678", nome: "Hugo", salarioBruto: 3800 },
  { matricula: "EFG901", nome: "Beatriz", salarioBruto: 4250 },
  { matricula: "HIJ234", nome: "Amanda", salarioBruto: 3350 },
  { matricula: "KLM567", nome: "Marcela", salarioBruto: 3600 },
  { matricula: "NOP890", nome: "Diego", salarioBruto: 3000 },
  { matricula: "PQR123", nome: "Ana Paula", salarioBruto: 3950 },
  { matricula: "STU456", nome: "Rafaela", salarioBruto: 3350 },
  { matricula: "VWX789", nome: "José", salarioBruto: 4700 },
  { matricula: "YZA012", nome: "Luciana", salarioBruto: 3100 },
  { matricula: "BCD345", nome: "Luis", salarioBruto: 3750 },
  { matricula: "EFG678", nome: "Fernanda", salarioBruto: 4100 },
  { matricula: "HIJ901", nome: "Roberta", salarioBruto: 3200 },
  { matricula: "KLM234", nome: "Giovanni", salarioBruto: 4400 },
  { matricula: "NOP567", nome: "Marina", salarioBruto: 2950 },
  { matricula: "PQR890", nome: "Daniel", salarioBruto: 4000 },
  { matricula: "STU123", nome: "Fernando", salarioBruto: 3250 },
  { matricula: "VWX456", nome: "Jessica", salarioBruto: 3800 },
  { matricula: "YZA789", nome: "Thiago", salarioBruto: 3150 },
  { matricula: "BCD012", nome: "Luiza", salarioBruto: 3850 },
  { matricula: "EFG345", nome: "Gustavo", salarioBruto: 4150 },
  { matricula: "HIJ678", nome: "Adriana", salarioBruto: 3450 },
  { matricula: "KLM901", nome: "Mateus", salarioBruto: 3600 },
  { matricula: "NOP234", nome: "Leticia", salarioBruto: 3050 },
  { matricula: "PQR567", nome: "Gabriela", salarioBruto: 3750 },
  { matricula: "STU890", nome: "Raphael", salarioBruto: 4300 },
  { matricula: "VWX123", nome: "Bianca", salarioBruto: 3350 },
  { matricula: "YZA456", nome: "Ricardo", salarioBruto: 4100 },
  { matricula: "BCD789", nome: "Camila", salarioBruto: 2950 },
  { matricula: "EFG012", nome: "Pedro", salarioBruto: 3950 },
  { matricula: "HIJ345", nome: "Carolina", salarioBruto: 3200 },
  { matricula: "KLM678", nome: "Mariana", salarioBruto: 4450 },
  { matricula: "NOP901", nome: "Felipe", salarioBruto: 3000 },
  { matricula: "PQR234", nome: "Juliana", salarioBruto: 3650 },
  { matricula: "STU567", nome: "Roberto", salarioBruto: 3350 },
  { matricula: "VWX890", nome: "Isabela", salarioBruto: 3200 },
  { matricula: "YZA123", nome: "Marcelo", salarioBruto: 3550 },
  { matricula: "BCD456", nome: "Luana", salarioBruto: 3050 },
  { matricula: "EFG789", nome: "Rafael", salarioBruto: 4200 },
  { matricula: "HIJ012", nome: "Carolina", salarioBruto: 3800 },
]
function exercicio20() {
  const tableLength = table.length

  for (let index = 0; index < tableLength; index++) {
    const employee = table[index]
    const inss = employee["salarioBruto"] * 0.12
    const netSalary = employee["salarioBruto"] - inss
    console.log()
    console.log(`Contracheque do empregado ${index + 1}`)
    console.log(`Matrícula: ${employee["matricula"]}`)
    console.log(`Nome: ${employee["nome"]}`)
    console.log(`Salário bruto: ${employee["salarioBruto"]}`)
    console.log(`Dedução INSS: ${inss}`)
    console.log(`Salário líquido: ${netSalary}`)
    console.log()
  }
}

module.exports = exercicio20
