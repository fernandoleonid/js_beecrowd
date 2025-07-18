export function problem (lines) {
    let n = Number(lines[0])
    let resultado = []
    let anterior = 0
    let atual = 1

    if (n >= 1) resultado.push(anterior)
    if (n >= 2) resultado.push(atual)
    for (let i = 2; i < n; i++) {
        let proximo = anterior + atual
        resultado.push (proximo)
        anterior = atual
        atual = proximo
    }
    console.log (resultado.join(' '))
}