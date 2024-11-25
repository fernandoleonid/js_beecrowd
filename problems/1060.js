// Números Positivos
export function problem (lines){
    const positivos = lines.filter(valor => valor > 0)
    console.log (`${positivos.length} valores positivos`)
}
