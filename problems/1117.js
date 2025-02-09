// Validação de Nota
export function problem(lines){
    let notasValidas = 0
    let soma = 0
    lines.forEach( (line ) => {
        const nota = Number(line)

        if (nota < 0 || nota > 10) {
            console.log ('nota invalida')
        } else{
            notasValidas++
            soma += nota
            if (notasValidas === 2) {
                const media = (soma / 2).toFixed(2)
                console.log (`media = ${media}`)
            }
        }
    })
}