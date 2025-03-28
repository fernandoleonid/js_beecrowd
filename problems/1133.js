export function problem (lines) {
    let [x, y] = lines.map(Number)
    if ( x > y ) {
        [x, y] = [y, x]
    }
    for (let i = x + 1; i < y; i++)  {
        if (i % 5 == 2 || i % 5 == 3){
            console.log (i)
        }
    }
    
}