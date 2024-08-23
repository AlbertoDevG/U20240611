let readline = require ('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

rl.question('Ingrese un mensaje o una cadena de texto: ', (mensaje) => {
    let palabras = mensaje.split(' ')
    let numpalabras = palabras.length
    console.log(`el numero de palabras en su mensaje/cadena es de: ${numpalabras}`);
    process.exit();
})