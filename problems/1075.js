export function problem (lines){
    const n = Number(lines[0])

    for (let i = 1; i <= 10000; i++){
        if(i % n == 2) {
            console.log(i)
        }
    }
}