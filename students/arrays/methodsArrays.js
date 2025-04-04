//**
// Explicando os metedos magicos de arrays em javascript
//  */


const MethodsArraysConcat = (FirstItem=Array, SecondItem=Array) => {
    return FirstItem.concat(SecondItem);
}
// Exemplo de uso
console.log("Concat", MethodsArraysConcat([1,2,3], [4,5,6]));



//* 
//  O metedo slice é utilizado para criar uma cópia de uma parte do array
//  */
const MethodsArraysSlice = (FirstItem=Array, StartIndex=Number, EndIndex=Number) => {
    return FirstItem.slice(StartIndex, EndIndex);
}

console.log("Slice", MethodsArraysSlice([1,2,3,4,5], 0, 3));


//* 
//  O metedo join é utilizado para unir os elementos de um array em uma string
// de fato estou de cara com isso geralem
//  */
const MethodsArraysJoin = (FirstItem=Array) => {
    return FirstItem.join();
}
console.log("Join", MethodsArraysJoin([1,2,3,4,5]));



// metedo pop
const MethodsArraysPop = (FirstItem=Array) => {
    return FirstItem.pop();
}
console.log("Pop", MethodsArraysPop([1,2,3,4,5]));



/// metedo push
const MethodsArraysPush = (FirstItem=Array) => {
    return FirstItem.push();
}
console.log("Push", MethodsArraysPush([1,2,3,4,5]));


/// metedo shift
const MethodsArraysShift = (FirstItem=Array) => {
    return FirstItem.shift();
}
console.log("Shift", MethodsArraysShift([1,2,3,4,5]));



/// every 

const MethodsArraysEvery = (FirstItem=Array) => {
    return FirstItem.every();
}
console.log("Every", MethodsArraysEvery([1,2,3,4,5]));