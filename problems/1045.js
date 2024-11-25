// Tipos de Triângulos
export function problem (lines){
    let [a, b, c] = lines[0].split(' ').map(Number)
    
    const ordenarLados = (lados) => lados.sort((x, y) => y - x)

    const verificarTriangulo = ([a, b, c]) => a < b + c

    function classicarTringualo ([a, b, c]) {
        const mensagem = []
        if (a*a == b*b + c*c ){
            mensagem.push('TRIANGULO RETANGULO')
        }
        if (a*a > b*b + c*c ){
            mensagem.push('TRIANGULO OBTUSANGULO')
        }
        if (a*a < b*b + c*c ){
            mensagem.push('TRIANGULO ACUTANGULO')
        }
        if (a == b && b == c) {
            mensagem.push('TRIANGULO EQUILATERO')
        }else if(a == b || a == c || b == c){
            mensagem.push('TRIANGULO ISOSCELES')
        }
        return mensagem.join('\n')
    }

    function principal(a, b, c){
        const ladosOrdenados = ordenarLados([a, b, c])
        if (verificarTriangulo(ladosOrdenados)){
            const classificacao = classicarTringualo(ladosOrdenados)
            console.log(classificacao)
        }else{
            console.log ('NAO FORMA TRIANGULO')
        }
    }

    principal(a, b, c)
}