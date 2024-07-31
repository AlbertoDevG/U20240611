let readline = require ('readline')

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
}) 

rl.question('Ingrese la palabra que desea verificar: ', (palabranormal) => {
    const Invertida = palabranormal.split('').reverse().join('');
    if (Invertida===palabranormal) {
        console.log('La palabra: ', palabranormal, ' si es palíndromo');
    
    }else{
        console.log('La palabra: ', palabranormal, ' No es palíndromo');
    }
    process.exit()
})