// Tempo de Jogo com Minutos
export function problem (lines){
    const [horaInicial, minutoInicial, horaFinal, minutoFinal] = lines[0].split(' ').map(Number)

    const inicio = horaInicial * 60 + minutoInicial
    const fim = horaFinal * 60 + minutoFinal

    let duracaoTotalMinutos

    if (fim > inicio){
        duracaoTotalMinutos = fim - inicio
    }else{
        duracaoTotalMinutos = (24 * 60 - inicio) + fim
    }

    const duracaoHoras = Math.floor(duracaoTotalMinutos / 60)
    const duracaoMinutos = duracaoTotalMinutos % 60

    console.log (`O JOGO DUROU ${duracaoHoras} HORA(S) E ${duracaoMinutos} MINUTO(S)`)
} 