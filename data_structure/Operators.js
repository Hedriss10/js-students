var num = 0; // {1}
num = num + 2;
num = num * 3;
num = num / 2;
num++;
num--;
num += 1; // {2}
num -= 2;
num *= 3;
num /= 2;
num %= 3;
console.log('num == 1 : ' + (num == 1)); // {3}
console.log('num === 1 : ' + (num === 1));
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true && false : ' + (true && false)); // {4}
console.log('true || false : ' + (true || false));
console.log('!true : ' + (!true));



/// example operators 
function myFunction(){
    // express count 1
    var count = 2;
    var set = 10;
    var result = count -= set
    
    const name = 'Jhon'
    const nameGetDataBase = 'Jhon'
    const age = 23
    const ageGetDataBase = 23
    
    if (count -= set){
        console.log('Resultado do set buscado', `${result}`)
    } else {
        consolo.log('Não teve conta')
    }

    if (name === nameGetDataBase){
        console.log('Usuario Encontrado')
    } else{
        console.log('Usuário não encontrado')
    }

    if (name == 'Jhon'){
        console.log('Usuario igual a Jhon')
    } else{
        console.log('Usuário não encontrado')
    }

    if (age == ageGetDataBase && name == nameGetDataBase || name == 'Jhon'){
        console.log('Idade encontrada')
        console.log('Idade', `${age}`)
    } else {
        console.log('Idade não encontrada')
        console.log('Idade', `${age}`)
    }

};





myFunction();
