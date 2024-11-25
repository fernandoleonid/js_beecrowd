// Sort Simples
export function problem(lines) {
    const valores = lines[0].split(' ').map(Number)

    const ordenar = (numeros) => [...numeros].sort( (x, y) => x - y )

    const valoresOrdenados = ordenar(valores)

    valoresOrdenados.forEach (valor => console.log (valor))
    console.log ('')
    valores.forEach (valor => console.log (valor))
}