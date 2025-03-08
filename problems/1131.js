export function problem (lines){

    let vitoriasInter = 0
    let vitoriasGremio = 0
    let empates = 0
    let totalJogos = 0

    let i = 0
    while (i < lines.length){
        let valores = lines[i].split(' ')
        
        if (valores.length === 1){
            if (valores[0] == "2") break
        }else {
            let [inter, gremio] = valores.map(Number)

            totalJogos++

            if (inter > gremio) {
                vitoriasInter++
            } else if (gremio > inter) {
                vitoriasGremio++
            } else {
                empates++
            }
            console.log ('Novo grenal (1-sim 2-nao)')
        }

        i++
    }

    console.log(`${totalJogos} grenais`)
    console.log(`Inter:${vitoriasInter}`)
    console.log(`Gremio:${vitoriasGremio}`)
    console.log(`Empates:${empates}`)
    if (vitoriasInter > vitoriasGremio) {
        console.log('Inter venceu mais')
    }else if (vitoriasGremio > vitoriasInter){
        console.log('Gremio venceu mais')
    }else {
        console.log('Nao houve vencedor')
    }
}