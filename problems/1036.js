// Fórmula de Bhaskara
export function problem (lines){

    const valores = lines[0].split(' ')

    function calcularRaizes (a, b, c) {
        const delta = b * b - 4 * a * c

        if (delta < 0 || a == 0) {
            return 'Impossivel calcular'
        }

        const x1 = (-b + Math.sqrt(delta)) / (2 * a)
        const x2 = (-b - Math.sqrt(delta)) / (2 * a)

        return `R1 = ${x1.toFixed(5)}\nR2 = ${x2.toFixed(5)}`
    }

    console.log (calcularRaizes(...valores))

}