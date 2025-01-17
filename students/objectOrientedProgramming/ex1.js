/*
Create class with js
*/

class Pearson{
    constructor(username= String, lastname= String, age=String, city=String, email=String){
        this.username = username;
        this.lastname = lastname;
        this.age = age;
        this.city = city;
        this.email = email 
    }

    // get age     
    getAge(){
        return this.age;
    }    
}


const register = new Pearson('Jhonatan', 'Pereira', 17, 'Sao Paulo', 'jhpereira@sp.com');
const age = register.getAge();

console.log(register);
console.log(age);