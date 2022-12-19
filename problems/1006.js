export function problem (lines) {
    const [A, B, C] = lines
    const pesoA = 2
    const pesoB = 3
    const pesoC = 5

    const media = (A * pesoA + B * pesoB + C * pesoC) / (pesoA + pesoB + pesoC)

    console.log (`MEDIA = ${media.toFixed(1)}`)
}