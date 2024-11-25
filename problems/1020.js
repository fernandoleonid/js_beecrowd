//  Idade em Dias
export function problem ( lines ){

    const calcularIdade = (idadeEmDias) => {
        const anos = Math.trunc(idadeEmDias  / 365)
        idadeEmDias = idadeEmDias % 365

        const meses = Math.trunc(idadeEmDias / 30)
        idadeEmDias = idadeEmDias % 30

        const dias = idadeEmDias

        return {
            anos,
            meses, 
            dias
        }

    }

    const idade =  calcularIdade(lines[0])
    	
    console.log(`${idade.anos} ano(s)`)
    console.log(`${idade.meses} mes(es)`)
    console.log(`${idade.dias} dia(s)`)
}