export function problem (lines){
    const [x1, y1] = lines[0].split(' ').map(Number)
    const [x2, y2] = lines[1].split(' ').map(Number)

    const distancia = Math.sqrt(Math.pow(x2 -  x1, 2) + Math.pow(y2 - y1, 2))

    console.log (distancia.toFixed(4))
    
}