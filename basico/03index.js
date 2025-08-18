//Switch
const animal = ''

switch(animal){
    case 'felino':
    case 'gato':{
        console.log('miau')
        break
    }
    case 'galinha':{
        console.log('cocorico')
        break
    }
    case 'cachorro':{
        console.log('au au')
    }
    default:{
        console.log('Não listado')
    }
}

const rl = require('node:readline')

const prompt = rl.createInterface({
    input: process.stdin, output: process.stdout
})

console.log("Digite uma configuração")
console.log("[1] Data atual")
console.log("[2] Hora atual")
console.log("[0] Sair")

prompt.question('> Selecione o que deseja fazer ', answer =>{
    switch(answer){
        case '1': {
            const date = new Date();
            const day = date.getDate()
            const month = date.getMonth()+1
            const year = date.getFullYear()
            console.log(`Hoje é ${day}/${month}/${year}`)
            break
        }
        case '2':{
            const date = new Date()
            const hours = date.getHours()
            const minutes = date.getMinutes()
            console.log(`Agora são ${hours}:${minutes}`)
            break
        }
        default:{
            console.log('Fim do Programa')
        }
    }
    prompt.close()
})