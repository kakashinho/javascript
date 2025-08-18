// Operadores
// sum = 28 + 2
// sub = 14 - 3
// mult = 100 * 2
// div = 10 / 2
// rest = 10 % 3

// Atribuição
// =  Atribuição simples
// += Adição combinada
// -= Subtração combinada
// *= Multiplicação combinada
// /= Divisão combinada

// Comparação
// > Maior que
// < Menor que
// >= Maior igual a
// <= Menor igual a
// == Igual                 ex: ("2" === 2) true
// === Estritamente igual a ex: ("2" === 2) false
// != Diferente de          ex: ("2" != 2)  false
// !== Estritamente diferente de ex: ("2" !== 2)  True

// Lógicos
// && E (AND)
// || OU (OR)
// ! Não (NOT)

// Ternário
// (expressão) ? (se verdadeiro) : (se falso)
// Exemplo:
const number = 5
console.log((number % 2 === 0 ) ? "Par" : "Ímpar")

let hours = 14

console.log(
    "Está de",
    hours >= 0 && hours < 6 ? "madrugada" :
    hours >= 6 && hours < 12 ? "manhã" :
    hours >= 12 && hours < 18 ? "atarde" :
    "noite"
)

// Estrutura condicional if

let temperature = 25
if (temperature >= 30){
    console.log("Está muito quente lá fora!")
} else if ((temperature <= 22)){
    console.log("Está muito frio lá fora!")
} else {
    console.log("A temperatura está agradável.")
}

// Pegando um input
const rl = require('node:readline')

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout,
})

prompt.question('Digite sua idade ', answer => {
    let age = Number.parseInt(answer);
    if (Number.isNaN(age)){
        console.log("Isso não é um número válido")
    } else {
        console.log(`A sua idade é ${age}`)
    }
    prompt.close()
})

const x = 5000
// Numeros com 2 casas decimais após a virgula
console.log(`A sua idade é ${x.toFixed(2)}`)