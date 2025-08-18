console.log("Hello world")

// variáveis const let var
// var é uma variavel global que pode ser acessado por todo programa
//um bloco se declara com chaves {}
// use const sempre que não precisar modificar a variavel
// nome de variavel sempre em inglês
// evite abreviar e enumerar nome de variavel
// Incoerência na hora de declarar

const userName = "João"

console.log(userName)

let string = 'esse texto'
let number = 22
let boolean = true
let array = []
let object = {}
let func = () => {}
let date = new Date()

const isActive = true
const savedCatsAmount = 450
const mainAppDirectoryPath = 'src/main'
const processCurrentWorkDirectory = process.cwd()

// palavras reservadas do javascript não pode ser utilizadas no nome de variáveis.

const rl = require('node:readline')

const prompt = rl.createInterface({
    input: process.stdin,
    output: process.stdout,
})

let name
prompt.question('Qual é seu nome? ', answer => {
    name = answer
    prompt.close()
})

prompt.on('close', () => {
    console.log('Seja bem vindo', name)
})