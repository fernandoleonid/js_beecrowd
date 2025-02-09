// Senha Fixa
export function problem (lines) {
    let indice = 0
    while (lines[indice] !== "2002") {
        console.log ("Senha Invalida")
        indice++
    }
    console.log ("Acesso Permitido")
}