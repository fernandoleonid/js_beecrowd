export function problem (lines) {
    lines.forEach(line => {
        const numero = Number(line)
        if (numero !== 0) {
            let resultado = []
            for (let i = 1; i <= numero; i++){
                resultado.push(i)
            }
            console.log(resultado.join(' '))
        }
    })
}