function direcciondecorreo(correo) {
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if (correo) {
            resolve(`correo enviado a: ${correo}` )
           } else {
            reject("Direccion de correo no proporcionada")
           } 
       }, 2000);
    })
}

direcciondecorreo("alberto@gmail.com")
.then( res =>{
    console.log("Mensaje: " + res);
})

.catch(error =>{
    console.log("Error: " + error);
})