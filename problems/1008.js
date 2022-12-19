export function problem (lines) {
    const [numero, horas, valorHora] = lines.map(Number)
    
    const salario = horas * valorHora

    console.log (`NUMBER = ${numero}\nSALARY = U$ ${salario.toFixed(2)}`)
}