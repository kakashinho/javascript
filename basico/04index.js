// estrutura for (inicialização, condição, execução)

const number = []
//for(let i = 0; i <10; i++){number.push(i)}
//for(let i = 9; i >= 0; i--){number.push(i)}
//console.log(number)

// for (let i = 0; i <=10; i++){
//     setTimeout(() => console.log(i), 500 * i)
// }

const fruits = ['maçã','banana','laranja','uva']

for(let i = 0; i < fruits.length; i++){
    console.log(fruits[i])
}

const text = 'Fatec é a melhor faculdade'
const letter = 'a'
let times = 0;
for (const char of text.toLowerCase()){
    if (char === letter){
        times++
    }
}

console.log(`A letra (${letter}) se repete ${times} vezes`)