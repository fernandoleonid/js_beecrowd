export function problem (lines){
    const values = lines[0].split(' ').map(Number)
    const A = values[0]

    let i = 1
    while (values[i] <= 0) {
        i++
    }

    let N = values[i]

    let sum = 0
    for (let i = 0; i < N; i++){
        sum += A + i
    }

    console.log (sum)
}