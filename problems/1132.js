export function problem (lines) {
    let [x, y] = lines.map(Number)

    if (x > y) {
        [x, y] = [y, x]
    }

   let soma = 0

   for (let i = x; i <= y; i++) {
        if (i % 13 != 0){
            soma += i
        }
   }
   console.log (soma)
}