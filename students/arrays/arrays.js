/// criando um array em JS

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//**
//  colocando um novo elemento dentro do array 
//  */

numbers.push(10, 12, 13);
// verificcando o novo array
console.log("Verificando o novo array", numbers);


//* 
// inserindo mais um elemento no inicio do meu array
// */
Array.prototype.insertFirstPosition =  function (value){
    for (let i = this.length; i >= 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = value;
};

numbers.insertFirstPosition(-1);

console.log("Verificando o novo array", numbers);
/// fazedo o mesmo com unshift
//* 
// Verificando o novo array, ao utilizar o metedo unshifit
// */
numbers.unshift(-2, -3, -4, -5);

console.log("Verificando o novo array apos utilizar o metedo unshifit", numbers);

/// removendo elementos dentro de um array
for (let i = 0; i < numbers.length; i++){
    numbers[i] = numbers[i + 1];
}

console.log("Verificando o novo array", numbers);

/// removendo os elementos da minha lista

Array.prototype.reIndex = function(myArray) {
    const newArray = [];
    for (let i = 0; i < this.length; i++){
        if (myArray[i] != undefined){
            newArray.push(myArray[i]);
        }
    }
    return newArray;
}
// para remover a primeira posição maualmente e executar o reIndex
Array.prototype.removeFirstPosition = function () {
    for (let i = 0; i < this.length; i++){
        this[i] = this[i + 1];
    }
    return this.reIndex(this);
}
numbers = numbers.removeFirstPosition();
console.log("Verificando o novo array", numbers);

//**
// Não devemos utilizar esse codigo de arrays em projetos grandes isso é somente uma manipulação de arrays para explorar a estrutura de dados
//  */

/////
/// utilizando o metedo shift para remover o primeiro elemento do array
numbers.shift(-1, -2, -3,-4, -5);
console.log("Verificando o novo shift", numbers);


/// trabalhando com arrays bidimensionais e multidimensionaisxw
let averageTemp = [];
averageTemp[0] = [72, 75, 79, 79, 81, 81];
averageTemp[1] = [81, 79, 75, 75, 73, 73];

//*
// Verificando o console de matrix
// para iterar pelo um array de um array usamos dois for i e j para iterar sobre arrays bidimensionais
//  */
function consoleMatrixx(matrix=Array){
    for (let i =  0; i < matrix.length; i++){
        for (let j = 0; j < matrix[i].length; j++){
            console.log(matrix[i][j]);
        }
    }
}
consoleMatrixx(averageTemp);


/// for para iterar sobre arrays multidimensionais

const matrix3x3x3 = [];
for (let i = 0; i < 3; i++){ // verificando a quantidade de linhas
    matrix3x3x3[i] = []; // verificando a quantidade de colunas
    for (let j = 0; j < 3; j++){ // verificando a quantidade de elementos
        matrix3x3x3[i][j] = []; 
        for (let k = 0; k < 3; k++){
            matrix3x3x3[i][j][k] = 0;
        }
    }
}

console.log(matrix3x3x3);

/// verificando o cubo
for (let i = 0; i > matrix3x3x3.length; i++){
    for (let j = 0; j < matrix3x3x3[i].length; j++){
        for (let k = 0; k < matrix3x3x3[i][j].length; k++){
            console.log(matrix3x3x3[i][j][k]);
        }
    }
}
console.log(matrix3x3x3);
