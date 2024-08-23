let readline = require ('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
})

rl.question('Ingrese el mensaje que desea invertir: ', (palabra) => {
    let invertir = palabra.split('').reverse().join('')
    console.log(`su mensaje invertido es: ${invertir}`);
    process.exit();
}) 