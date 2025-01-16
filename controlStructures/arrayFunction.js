/*
    Array functions
    Podemos criar uma array com uma funcao
    podemos agregar mais funcoes
    podemos usar o rest operator
*/

var circleArea =  function circleArea(r){
    var PI = 3.14;
    var area = PI * r * r;
    return area
};

console.log(circleArea(5));

var totalStats = function totalStats(x=Number, y=Number, z=Number){
    return x + y + z
};

console.log(totalStats(1, 2, 3));

let params = [3, 4, 5];

var restParamateFunctions =  function restParamateFunctions(x=Number, y=Number, z=Number, ...a){
    return x + y + z + a
}
console.log(1, 2, 3, ...params);