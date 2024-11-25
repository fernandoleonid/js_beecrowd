// Pares entre Cinco Números
export function problem (lines){
    const quantidadePares = lines
            .slice(0, -1)
            .map(Number)
            .filter(valor => valor % 2 == 0 )
            .length

    console.log (`${quantidadePares} valores pares`)
}