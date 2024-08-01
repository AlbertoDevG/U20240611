let readline = require('readline')

let rl = readline.createInterface(
    process.stdin,
    process.stdout
)

rl.question('Ingrese una frase: ', (frase) => {
    rl.question('Ingrese la palabra que va a modificar: ', (palabra)=>{
        rl.question('Ingrese la nueva palabra: ', (nueva)=>{
            let nuevafrase = frase.replace(palabra, nueva)
            console.log(`la frase modificada es: ${nuevafrase}`);
            process.exit();
        })
    })
})