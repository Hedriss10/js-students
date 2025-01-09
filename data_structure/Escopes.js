var myVariable = 'global'; // {1}
var myOtherVariable = 'global' // {2}

function myFunction() {
    var myVariable = 'local'; // {3}
    return myVariable
};

function myOtherFunction(){
    var myOtherVariable = 'local'; // {4}
    return myOtherVariable
};

console.log(myVariable); // {5}
console.log(myOtherVariable); // {6}
console.log(myFunction()); // {7}
console.log(myOtherFunction()); // {8}