export function problem (lines) {
    const n = Number(lines[0])

    for (let i = 2; i <= n; i += 2){
        const quadrado = i * i
        console.log (`${i}^2 = ${quadrado}`)
    }
}