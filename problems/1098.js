export function problem (lines) {
    const saltos = [1, 2, 3]

    for (let cont = 0; cont <= 2; cont += 0.2) {
        saltos.forEach ( salto => {
            const i = parseFloat(cont.toFixed(1))
            console.log(`I=${i} J=${i + salto}`)
        })
    }
}