export function problem (lines) {

    const consumoMedio = (distancia, combustivel) => distancia / combustivel

    const resultado = consumoMedio(...lines)

    console.log (`${resultado.toFixed(3)} km/l`)
}