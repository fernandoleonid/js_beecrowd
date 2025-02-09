// Quadrante
export function problem (lines) {
    lines.forEach ( line => {
        const [x, y] = line.split(' ').map(Number)
        if (x === 0 || y === 0) {
            return
        }else if (x > 0 && y > 0) {
            console.log ('primeiro')
        }else if (x < 0 && y > 0) {
            console.log ('segundo')
        }else if (x < 0 && y < 0) {
            console.log ('terceiro')
        }else if (x > 0 && y < 0) {
            console.log ('quarto')
        }
    })
}