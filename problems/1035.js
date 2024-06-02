export function problem (lines) {

    const valores = lines[0].split(' ').map(Number)

    function verificarValores (a, b, c, d) {
    
        if (b>c && d>a && (c+d)>(a+b) && c>0 && d>0 && a%2===0){
            console.log('Valores aceitos')
        }else{
            console.log('Valores nao aceitos')
        }
    }

    verificarValores(...valores)
} 