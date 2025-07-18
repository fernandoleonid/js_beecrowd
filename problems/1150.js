export function problem (lines) {
    let X = Number(lines[0])
    let Z = Number(lines[1])

    for (let i = 2; Z <= X; i++) {
        Z = Number(lines[i])
    }

    let soma = 0
    let contador = 0

    for (let i = X; soma <= Z; i++){
        soma += i
        contador++
    }

    console.log (contador)
}