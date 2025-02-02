export function problem (lines) {
    lines.shift()
    lines.pop()

    lines.forEach( (line)=> {
        const [x, y] = line.split(' ').map(Number)
        if (y === 0) {
            console.log ('divisao impossivel')
        }else {
            console.log ( (x / y).toFixed(1))
        }
    })
}