let fecha1 = new Date(2024, 7, 20)
let fecha2 = new Date(2024, 7, 26)

const dMilisegundos = fecha2 - fecha1
const mlsxDia = 24 * 60 * 60 * 1000
const dDias = dMilisegundos / mlsxDia

console.log(`La diferencia de días es de: ${dDias}`)
