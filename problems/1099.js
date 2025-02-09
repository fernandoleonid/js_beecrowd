// Soma de Ímpares Consecutivos II
export  function problem (lines){
    const numeroCasos = Number(lines[0])

    for (let caso = 1; caso <= numeroCasos; caso++){
        const [menor, maior] = lines[caso].split(' ')
                                          .map(Number)
                                          .sort( (a, b) => a - b)
        
        let soma = 0;
        for (let numero = menor + 1; numero < maior; numero++){
            if (numero % 2 != 0) {
                soma += numero
            }
        }
        console.log (soma)
    }
}