export function problem (lines) {
    lines.forEach ( line => {
        const [m, n] = line.split(' ')
                           .map(Number)
                           .sort( (a, b) => a - b )

        if (m <= 0 || n <= 0) return

        let sequencia = []
        let soma = 0
        for (let numero = m; numero <= n; numero++){
            sequencia.push(numero)
            soma += numero
        }
        console.log(`${sequencia.join(' ')} Sum=${soma}`)
    })
}