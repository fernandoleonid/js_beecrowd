export function problem (lines) {
    const [x, y] = lines[0].split(' ').map(Number)

    for (let i = 1; i <= y; i += x) {
        let linha = []
        for (let j = i; j < i + x; j++){
            linha.push(j)
        }
        console.log (linha.join(' '))
    }
}