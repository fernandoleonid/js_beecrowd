export function problem (lines){
    let salario = Number(lines[0])
    let imposto = 0

    if (salario > 4500) {
        imposto = (salario - 4500) * 0.28
        salario = 4500 
    }
    if (salario > 3000) {
        imposto += (salario - 3000) * 0.18
        salario  =  3000
    }
    if (salario > 2000) {
        imposto += (salario - 2000) * 0.08
    }
    if (imposto == 0){
        console.log("Isento")
    }else{
        console.log (`R$ ${imposto.toFixed(2)}`)
    }
}