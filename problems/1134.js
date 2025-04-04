export function problem (lines) {
    let tipo = {
        1: 0,
        2: 0,
        3: 0
    }
    lines.forEach( numero => {
        if (numero >=1 && numero <=3) {
            tipo[numero]++
        }else if (numero == 4) {
            return
        }
    } )

    console.log ("MUITO OBRIGADO")
    console.log (`Alcool: ${tipo[1]}`)
    console.log (`Gasolina: ${tipo[2]}`)
    console.log (`Diesel: ${tipo[3]}`)
}