const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Ingrese la cadena de texto: ', (cadena) => {
  rl.question('Ingrese el inicio de su subcadena: ', (inicio) => {
    rl.question('Ingrese el final de su subcadena: ', (fin) => {
      let subcadena = cadena.substring(inicio, fin);
      console.log(`La subcadena de su cadena original es: ${subcadena}`);
      process.exit
    });
  }
);
});
