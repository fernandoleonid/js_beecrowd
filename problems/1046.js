export function problem(lines){

    const lerHoras = lines => lines[0].split(' ').map(Number)

    function calcularDuracao ([horaInicial, horaFinal]){
        if (horaFinal > horaInicial) {
            return horaFinal - horaInicial
        }else{
            return (24 - horaInicial) + horaFinal 
        }
    }

    const horas = lerHoras(lines)
    const duracao = calcularDuracao(horas)

    console.log (`O JOGO DUROU ${duracao} HORA(S)`)
}