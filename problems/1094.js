export function problem(lines) {
    const experimentos = lines.slice(1, -1)

    let total = 0
    let coelhos = 0
    let ratos = 0
    let sapos = 0

    experimentos.forEach ( experimento => {
        const [quantidade, tipo] = experimento.split(' ')
        const qtd = Number(quantidade)

        total += qtd
        if (tipo == 'C') {
            coelhos += qtd
        } else if (tipo == 'R') {
            ratos += qtd
        } else if (tipo == 'S') {
            sapos += qtd
        }
    })

    const percentual = quantidade => ((quantidade / total) * 100).toFixed(2)

    console.log (`Total: ${total} cobaias`)
    console.log (`Total de coelhos: ${coelhos}`)
    console.log (`Total de ratos: ${ratos}`)
    console.log (`Total de sapos: ${sapos}`)
    console.log (`Percentual de coelhos: ${percentual(coelhos)} %`)
    console.log (`Percentual de ratos: ${percentual(ratos)} %`)
    console.log (`Percentual de sapos: ${percentual(sapos)} %`)
}