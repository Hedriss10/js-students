# Estruturas de dados com Javascript

Conceito de estruturas de dados com `javascript`,  é conforme toda a linguagem de programação, de fato `javascript` é linguagem totalmente dinâmica, não é fortemente tipada, e conforme o meu aprendizado.

**Verdadeiro ou falso:**
Maioria das linguagens de programação o verdadeiro e falso e baseado em valores booleanos mas em `javascript`, é um conceito complicado de se entender de acordo com outros dados a se analisar:

```js
// Tipo do valor + Resultado
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
var obj = { name: 'John' }; // name obj
myFunction(obj); // true
myFunction(obj.name); // true
myFunction(obj.age); // age (propriedade não existe)
```