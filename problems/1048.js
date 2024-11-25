// Aumento de Salário
export function problem(lines){
    
    function calcularReajuste(salario){
        const tabela = [
            {limite: 400, percentual: 15},
            {limite: 800, percentual: 12},
            {limite: 1200, percentual: 10},
            {limite: 2000, percentual: 7},
            {limite: Infinity, percentual: 4}
        ]

        const faixaSalarial = tabela.find( faixa => salario <= faixa.limite)
        const reajuste = salario * faixaSalarial.percentual / 100
        const novoSalario = salario + reajuste

        return {
            salario: novoSalario.toFixed(2),
            reajuste: reajuste.toFixed(2),
            percentual: faixaSalarial.percentual
        }
    }

    const salario = Number(lines[0])
    const resultado = calcularReajuste(salario)

    console.log (`Novo salario: ${resultado.salario}`)
    console.log (`Reajuste ganho: ${resultado.reajuste}`)
    console.log (`Em percentual: ${resultado.percentual} %`)
}   