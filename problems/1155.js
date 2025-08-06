export function problem (lines) {
    let s = 1

    for (let i = 2; i <= 100; i++) {
        s += 1/i
    }
    console.log (s.toFixed(2))
}