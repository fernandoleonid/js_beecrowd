export function problem (lines) {
    
    const [tempo, velocidade] = lines.map(Number)
    const distancia = tempo * velocidade
    const consumo = 12
    const litros = distancia / consumo

    console.log (litros.toFixed(3))
}