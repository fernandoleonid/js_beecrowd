export function problem (lines) {
    const n = Number(lines[0])

    let fatorial = 1

    for (let i=1; i<=n; i++) {
        fatorial *= i
    }
    console.log (fatorial)
}