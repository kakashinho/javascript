// console.log(`Hello`)
// console.log(`I like pizza!`)

// window.alert(`This is an alert!`)
// window.alert(`I like pizza!`)

//Pegando um numero da tela
//const valor = window.prompt('Enter the number')

//Aplicando conteudo no H1 e P
document.getElementById("myH1").textContent = `Enter the radius of a circle`
document.getElementById("myP").textContent = ''

document.getElementById("mySubmit").onclick = function(){
   let radius = document.getElementById("myText").value
   radius = Number(radius);
   circumference = 2 * 3.14 * radius
   document.getElementById("myH3").textContent = circumference + "cm"
}

// This is a comment

/* This
    is 
    a 
    commment
*/
