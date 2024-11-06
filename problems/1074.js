export function problem (lines) {
    const n = Number(lines[0])

    const numeros = lines.slice(1, n + 1).map(Number)

    numeros.forEach(numero => {
        if (numero === 0 ){
            console.log ('NULL')
        }else{
            const parImpar = numero % 2 === 0 ? "EVEN" : "ODD"
            const positivoNegativo = numero > 0 ? "POSITIVE" : "NEGATIVE"
            console.log (`${parImpar} ${positivoNegativo}`)
        }
    })
}