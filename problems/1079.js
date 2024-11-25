// Médias Ponderadas
export function problem (lines) {
    const n = Number(lines[0])

    for (let i = 1; i <= n; i++){
        const [a, b, c] = lines[i].split(' ').map(Number)
        const media = ((a * 2) + (b * 3) + (c * 5)) / 10
        console.log(media.toFixed(1))
    }
}