export function problem(lines){
    const mes = Number(lines[0]) - 1

    const data = new Date(2000, mes)

    const nomeMes = data.toLocaleDateString('en-US',{month:'long'})

    console.log(nomeMes)
    
}