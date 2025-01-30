export function problem (lines) {
    lines.pop()
    lines.forEach ( line => {
        const [x, y] = line.split(' ').map(Number)
        if (x === y) return
        console.log(x > y ? "Decrescente" : "Crescente")
    })
}