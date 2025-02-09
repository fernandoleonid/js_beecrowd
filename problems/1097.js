// Sequencia IJ 3
export function problem (lines){
    const saltos = [6, 5, 4]
    for (let i = 1; i <= 9; i += 2) {
        saltos.forEach( salto => console.log(`I=${i} J=${i + salto}`))
    }
}