let readline = require('readline');
let rl = readline.createInterface(
    process.stdin,
    process.stdout
)



function Menu() {
    console.log("Opciones:");
    console.log("1- Crear archivo JSON con estudiantes");
    console.log("2- Leer archivo JSON de estudiantes");
    console.log("3- Agregar nuevo estudiante");
    console.log("4- Actualizar informacion de estudiantes");
    console.log("5- Eliminar un estudiante");
    console.log("6- Contar estudiantes");
    console.log("7- Salir");
}
Menu()

    rl.question('Selecciona una opcion: ', (answer)=>{
        switch (parseInt(answer)) {
            case 1:
                console.log("Creando archivo JSON... ");
                require('./create'); 
                setTimeout(() => Menu(), 25)
                break;
            case 2: 
                console.log("Leyendo archivo JSON... ");
                require('./read'); 
                setTimeout(() => Menu(), 25)
            case 3:
                console.log("Agregando nuevo estudiante... ");
                require('./add'); 
                setTimeout(() => Menu(), 25)
            case 4:
                console.log("Actualizando informacion... ");
                require('./update'); 
                setTimeout(() => Menu(), 25)
            case 5:
                console.log("Eliminando estudiante... ");
                require('./delete'); 
                setTimeout(() => Menu(), 25)
            case 6:
                console.log("Contando estudiantes... ");
                require('./count'); 
                setTimeout(() => Menu(), 25)
            case 7: 
                console.log("Hasta la proxima!");
                rl.close
            default:
                console.log("Opcion no valida");
                Menu()
                break;
        }
    })





