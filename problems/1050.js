// DDD
export function problem (lines) {

    const ddd = lines[0]
    const dddCidades = {
        "61": "Brasilia",
        "71": "Salvador",
        "11": "Sao Paulo",
        "21": "Rio de Janeiro",
        "32": "Juiz de Fora",
        "19": "Campinas",
        "27": "Vitoria",
        "31": "Belo Horizonte"
    }

    const cidade = dddCidades[ddd] || "DDD nao cadastrado"

    console.log (cidade)

}