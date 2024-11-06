export function problem (lines){
    const n = Number(lines[0])

    const numeros = lines.slice(1,n + 1).map(Number)

    let dentro = 0
    let fora = 0

    numeros.forEach( numero => {
        if (numero >= 10 && numero <= 20){
            dentro++
        }else{
            fora++
        }
    })

    console.log (`${dentro} in`)
    console.log (`${fora} out`)
}