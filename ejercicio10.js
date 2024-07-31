let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una palabra: ', (palabra) => {
    const mayuscula =  palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
        console.log(`La palabra capitalizada es: ${mayuscula}` );
        process.exit()
    })