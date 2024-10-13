export function problem (lines){
    const numero = Number(lines[0])

    const inicio = numero % 2 == 0 ? numero + 1 : numero
    const fim = inicio + 12

    for (let contador = inicio; contador < fim; contador += 2) {
        console.log (contador)
    }
}