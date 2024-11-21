export function problem (lines){
    const n = Number(lines[0])

    for (let i=1; i<=10; i++){
        console.log(`${i} x ${n} = ${i * n}`)
    }
}