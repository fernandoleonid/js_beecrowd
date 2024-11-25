// Triângulo
export function problem (lines){
    const [a, b, c] = lines[0].split(' ').map(Number)

    if (a+b > c && a+c > b && b+c > a){
        const perimetro = a + b + c
        console.log (`Perimetro = ${perimetro.toFixed(1)}`)
    }else{
        const area = ((a + b) * c) / 2
        console.log (`Area = ${area.toFixed(1)}`)
    }
}