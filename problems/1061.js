// Tempo de um Evento
export function problem (lines) {

function criarData (dia, horario) {
    const [hora, minuto, segundo] = horario
    return new Date(2024, 0, dia, hora, minuto, segundo).getTime()
}

const diaInicio = Number(lines[0].split(' ')[1])
const horarioInicio = lines[1].split(':').map(Number)

const diaFim = Number(lines[2].split(' ')[1])
const horarioFim = lines[3].split(':').map(Number)

const dataInicial = criarData(diaInicio, horarioInicio)
const dataFim = criarData(diaFim, horarioFim)

let diferenca = (dataFim - dataInicial) / 1000

const dias = Math.floor(diferenca / (24 * 60 * 60))
diferenca %= (24 * 60 * 60)

const horas = Math.floor(diferenca / (60 * 60))
diferenca %= (60 * 60)

const minutos = Math.floor(diferenca / 60)
const segundos =  diferenca % 60


console.log (`${dias} dia(s)`)
console.log (`${horas} hora(s)`)
console.log (`${minutos} minuto(s)`)
console.log (`${segundos} segundo(s)`)

}