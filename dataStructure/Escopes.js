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





let movie = 'Lord of the rings'; // {1}

function startWansFans(){
    const movie = 'Start Wars'; // {2}
    return movie
}

function marvelFans(){
    const movie = 'Avengers'; // {3}
    return movie
}

function blizzardFans(){    
    const isFan = true;
    let pharse = 'Warcraft'; // {4}

    if (isFan) {
        let pharse = 'Starcraft'; // {5}
        pharse =  'For the horde!'
        console.log('Inside if' + pharse);
    }
    pharse = 'For the alliance!'
    console.log('Outside if: ' + pharse);
}

console.log(movie)
console.log(startWansFans())
console.log(marvelFans())
blizzardFans()