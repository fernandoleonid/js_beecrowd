export function problem (lines) {

    function calcularMedia () {
        
        let notasValidas = []
        while (notasValidas.length < 2) {
            let nota = Number(lines.shift())
            if (nota >= 0 && nota <= 10) {
                notasValidas.push(nota)
            } else {
                console.log('nota invalida')
            }
        }
        let media = (notasValidas[0] + notasValidas[1]) / 2
        console.log (`media = ${media.toFixed(2)}`)
    }

    while (true) {
        calcularMedia()
        let opcao
        
        do{
            console.log ('novo calculo (1-sim 2-nao)')
            opcao = lines.shift()
        } while (opcao != 1 && opcao != 2)

        if (opcao == 2) break
    }
}