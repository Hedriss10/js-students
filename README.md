# Data Structures with JavaScript

The concept of data structures with `JavaScript` follows the same principles as in any programming language. In fact, `JavaScript` is a fully dynamic language, not strongly typed, according to my learning experience.

**True or False:**  
In most programming languages, true and false are based on boolean values. However, in `JavaScript`, this is a more complicated concept to understand, depending on the other data being analyzed:

```js
// Type of value + Result
console.log(typeof undefined) // type of undefined
console.log(typeof null) // typeof object
console.log(typeof false) // typeof boolean
console.log(typeof '') // typeof string
console.log(typeof myFunction) // typeof function
myFunction(new String('')); // true (object is always true)
myFunction(1); // true
myFunction(-1); // true
myFunction(NaN); // false
myFunction(new Number(NaN)); // true (object is always true)
myFunction({}); // true (object is always true)
var obj = { name: 'John' }; // name obj
myFunction(obj); // true
myFunction(obj.name); // true
myFunction(obj.age); // age (property does not exist)
```