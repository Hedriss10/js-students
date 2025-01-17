const numbers = [1, 2, 3, 4, 5, 6, 7]

Array.prototype.insertFirstPosition =  function (value){
    for (let i = this.length; i >= 0; i--){
        this[i] = this[i - 1];
    }
    this[0] = value;
};
numbers.insertFirstPosition(-1)

console.log(numbers)