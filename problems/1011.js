export function problem (lines) {
    const raio = parseFloat(lines[0])
    const PI = 3.14159
    const volume = (4/3) * PI * Math.pow(raio,3)

    console.log (`VOLUME = ${volume.toFixed(3)}`)
}