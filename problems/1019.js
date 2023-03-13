export function problem (lines) {
    const totalSegundos = lines[0]

    function converterSegundos (segundos, tipo) {
        const conversao = {
            hora: 3600,
            minuto: 60,
            segundo: 1
        }
        const quantidade = Math.floor(segundos / conversao[tipo])
        const restoSegundos = segundos % conversao[tipo]
        return { quantidade, restoSegundos }
    }

    function formatarHora (segundos) {
        const horas = converterSegundos(segundos, 'hora')
        const minutos = converterSegundos(horas.restoSegundos, 'minuto')
        
        return `${horas.quantidade}:${minutos.quantidade}:${minutos.restoSegundos}`
    }

    console.log (formatarHora(totalSegundos))
}