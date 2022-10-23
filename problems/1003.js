export function problem (lines) {

    const soma = (a, b) => a + b;
 
    const resultado = lines.map(Number).reduce(soma);

    console.log (`SOMA = ${resultado}`);
}