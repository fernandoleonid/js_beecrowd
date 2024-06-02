export function problem (lines){
    const [a, b] = lines[0].split(' ')
 
    const saoMultiplos = (a, b) => a % b == 0 ||  b % a  == 0

    const obterMensagem = (a, b) => saoMultiplos(a, b) ? 'Sao Multiplos' : 'Nao sao Multiplos'

    console.log (obterMensagem(a, b))

}