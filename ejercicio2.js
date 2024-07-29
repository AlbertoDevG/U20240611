let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('¿Ingrese un texto?', (texto)=>{
const caracteres = texto.length
    console.log(`El numero de caracteres de su texto es: ${caracteres}` );
    process.exit
})