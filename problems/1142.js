export function problem (lines) {
    const n = Number(lines[0])
    let contador = 1
    let resultado = ''

    for (let i = 0; i < n; i++){
        resultado += `${contador} ${contador + 1} ${contador + 2} PUM\n`
        contador += 4
    }
    console.log(resultado)
}