console.log('5 & 1:', (5 & 1));
console.log('5 | 1:', (5 | 1));
console.log('~ 5:', (~5));
console.log('5 ^ 1:', (5 ^ 1));
console.log('5 << 1:', (5 << 1));
console.log('5 >> 1:', (5 >> 1));

// valores do typeof 
console.log('typeof num:', typeof num);
console.log('typeof Packt:', typeof 'Packt');
console.log('typeof true:', typeof true);
console.log('typeof [1,2,3]:', typeof [1,2,3]);
console.log('typeof {name:John}:', typeof {name:'John'});
console.log('typeof null:', typeof null);
console.log('typeof float64Array:', typeof 1.5);


// functions bits
function myFunction(val= String | Boolean) {
    return val ? console.log('val is true') : console.log('val is false');
}
myFunction(true); // true
myFunction(false); // false
myFunction(new Boolean(false)); // true (objeto é sempre true)
myFunction(''); // false
myFunction('Packt'); // true




/// verdadeiro ou falso
console.log(typeof undefined) // type of undefined
console.log(typeof null) // typeof object
console.log(typeof false) // typeof boolean
console.log(typeof '') // typeof string
console.log(typeof myFunction) // typeof function
myFunction(new String('')); // true (objeto é sempre true)
myFunction(1); // true
myFunction(-1); // true
myFunction(NaN); // false
myFunction(new Number(NaN)); // true (objeto é sempre true)
myFunction({}); // true (objeto é sempre true)
var obj = { name: 'John' }; 
myFunction(obj); // true
myFunction(obj.name); // true
myFunction(obj.age); // age (propriedade não existe)