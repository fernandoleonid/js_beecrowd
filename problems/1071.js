export function problem (lines) {
    const [x, y] = lines.map(Number)

    const menor = Math.min(x, y) + 1
    const maior = Math.max(x, y)

    let somaImpares = 0

    for (let i = menor; i < maior; i++ ){
        if (i % 2 !== 0) {
            somaImpares += i
        }
    }

    console.log (somaImpares)
}