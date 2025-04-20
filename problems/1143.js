export function problem (lines) {
    const N = Number(lines[0])
    for (let i = 1; i <= N; i++ ) {
        console.log (`${i} ${i*i} ${i*i*i}`)
    }   
}