export function problem (lines) {
    let contador = 0
    let soma = 0
    let idade = Number(lines[contador])

    while (idade >= 0) {
        soma += idade
        contador++
        idade = Number(lines[contador])
    }
    let media = soma / contador
    console.log (media.toFixed(2))
}