let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese un mensaje: ', (mensaje)=>{
    const mayusculas = mensaje.toUpperCase()
        console.log(`El mensaje en mayusculas es: ${mayusculas}` );
        process.exit();
    })