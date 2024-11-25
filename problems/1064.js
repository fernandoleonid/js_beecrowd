// Positivos e Média
export function problem (lines){
    const valoresPositivos = lines.map(Number)
                                  .filter( valor => valor > 0)

    const qtdPositivos = valoresPositivos.length

    const mediaPositivos = valoresPositivos
                                .reduce((acc, valor) => acc + valor,0) /  qtdPositivos
    console.log (`${qtdPositivos} valores positivos`)
    console.log (mediaPositivos.toFixed(1))
}