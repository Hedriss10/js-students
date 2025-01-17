/**
 * Vamos desobrir quais são os 20 primeiros números da sequencia de Fibonnaci;
 * Os dois primeiros números já sabemos que são 1 e 2, cada número subsquente é a soma dos dois números anteriores
*/

// const fibonacci = new Array(); 

// fibonacci[1] = 1;
// fibonacci[2] = 1;

// for(let i = 3; i < 20; i++) {
//     fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
// }

// for (let i = 1; i < fibonacci.length; i++) {
//     console.log(fibonacci[i]);
// }


const fibonacci = new Array();

fibonacci[1] = 1;
fibonacci[2] = 1;

for (let i = 3; i < 20; i++){
    fibonacci[i] = fibonacci[i - 1] + fibonacci[i - 2];
}
for (let i = 1; i < fibonacci.length ; i++){
    console.log(fibonacci[i])
}