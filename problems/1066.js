// Pares, Ímpares, Positivos e Negativos
export function problem (lines){
    const numeros = lines.slice(0,-1).map(Number)

    const pares = numeros.filter(numero => numero % 2 == 0).length

    const impares = numeros.filter(numero => numero % 2 !==0).length

    const positivos = numeros.filter(numero => numero > 0).length

    const negativos = numeros.filter(numero => numero < 0).length

    console.log (`${pares} valor(es) par(es)`)
    console.log (`${impares} valor(es) impar(es)`)
    console.log (`${positivos} valor(es) positivo(s)`)
    console.log (`${negativos} valor(es) negativo(s)`)

}