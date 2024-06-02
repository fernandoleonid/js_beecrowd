export function problem(lines) {

    function buscarProduto(codigo){
        const tabelaProdutos = {
            1: { especificacao: "Cachorro Quente", preco: 4.0},
            2: { especificacao: "X-Salada", preco: 4.5 },
            3: { especificacao: "X-Bacon", preco: 5.0},
            4: { especificacao: "Torrada simples", preco: 2.0},
            5: { especificacao: "Refrigerante", preco: 1.5}
        }
        return tabelaProdutos[codigo]
    }

    function calcularValorTotal(codigo, quantidade){
        const {preco} = buscarProduto(codigo)
        return preco * quantidade 
    }

    function mostrarConta (valores){
        const [codigo, quantidade] = valores.split(' ')
        const valorTotal = calcularValorTotal(codigo, quantidade)
        console.log (`Total: R$ ${valorTotal.toFixed(2)}`)        
    }

    mostrarConta(lines[0])
}