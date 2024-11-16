let readline = require('readline');
let rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function Menu() {
    console.log("Opciones:")
    console.log("1- Crear archivo JSON con estudiantes")
    console.log("2- Leer archivo JSON de estudiantes")
    console.log("3- Agregar nuevo estudiante")
    console.log("4- Actualizar informacion de estudiantes")
    console.log("5- Eliminar un estudiante")
    console.log("6- Contar estudiantes")
    console.log("7- Salir")
}

function Proceso() {
    rl.question('Selecciona una opción: ', (answer) => {
        switch (parseInt(answer)) {
            case 1:
                console.log("Creando archivo JSON... ")
                require('./create')
                break;
            case 2:
                console.log("Leyendo archivo JSON... ")
                require('./read')
                break;
            case 3:
                console.log("Agregando nuevo estudiante... ")
                require('./add')
                break;
            case 4:
                console.log("Actualizando información... ")
                require('./update')
                break;
            case 5:
                console.log("Eliminando estudiante... ")
                require('./delete')
                break;
            case 6:
                console.log("Contando estudiantes... ")
                require('./count')
                break;
            case 7:
                console.log("Hasta la próxima!")
                rl.close()
                return; 
            default:
                console.log("Opción no válida")
                break;
        }
        
        setTimeout(() => {
            Menu()
            Proceso()
        }, 25);
    });
}

Menu();
Proceso()


    
