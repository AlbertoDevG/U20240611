let readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.question('Ingrese la palabra a contar el numero de vocales: ', (palabra) => {
    let palabraminus = palabra.toLowerCase();
    const vocales = /[aeiou]/g;
    const vocalesencontradas = palabraminus.match(vocales);
    const vocalescontar = vocalesencontradas ? vocalesencontradas.length : 0;
    console.log('La palabra:', palabra, 'contiene:', vocalescontar, 'vocales.');
    process.exit();
});

