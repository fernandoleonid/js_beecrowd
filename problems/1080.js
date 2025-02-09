// Maior e Posição
export function problem (lines){
    const numeros = lines.map(Number)

    let maiorValor = lines[0]
    let posicao = 1

    numeros.forEach( (valor, index) =>{
        if (valor > maiorValor) {
            maiorValor = valor
            posicao = index + 1
        }
    })

    console.log (maiorValor)
    console.log (posicao)
}