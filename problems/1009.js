export function problem (lines) {
    const [nome, salario, vendas] = lines

    const comissao = 0.15

    const total = Number(salario) + (Number(vendas) * comissao)

    console.log(`TOTAL = R$ ${total.toFixed(2)}`)
}