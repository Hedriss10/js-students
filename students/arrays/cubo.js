
/// resolvendo o cubo tridimensional em javascript

/// vamos trabalhar com arrays tridimensionais


const cube = [];

for (let i = 0; i < 3; i++) { // coletando as dimensões do cubo
    cube[i] = []; // Inicializa o array de nível 1
    for (let j = 0; j < 3; j++) { // Define o tamanho do segundo nível
        cube[i][j] = []; // Inicializa o array de nível 2
        for (let k = 0; k < 3; k++) { // Define o tamanho do terceiro nível
            cube[i][j][k] = i * j * k; // Atribui o valor
        }
    }
}


console.log(cube);