export function problem (lines) {
    let s = 1
    let denominador = 2

    for (let numerador = 3; numerador <=39; numerador += 2){
        s += numerador / denominador
        denominador *= 2
    }
    console.log (s.toFixed(2))
}