export function problem (lines){
    const [classe1, classe2, classe3] = lines
    const tabela = {
        vertebrado: {
            ave:{
                carnivoro: 'aguia',
                onivoro: 'pomba'
            },
            mamifero:{
                onivoro: 'homem',
                hervivoro: 'vaca'
            }
        },
        invertebrado:{
            inseto: {
                hematofago: 'pulga',
                herbivoro: 'lagarta'
            },
            anelideo: {
                hematofago: 'sanguessuga',
                onivoro: 'minhoca'
            }
        }
    }

    const animal = tabela[classe1][classe2][classe3]

    console.log (animal)
}