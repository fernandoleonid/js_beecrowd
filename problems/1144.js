export function problem (lines) {
    const n = Number(lines[0])
    for (let i = 1; i <= n; i++){
        console.log(`${i} ${i*i} ${i*i*i}`)
        console.log(`${i} ${i*i+1} ${i*i*i+1}`)
    }
}