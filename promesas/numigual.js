let num = 5
const promesa = new Promise((resolve, reject) => {
    if (num == 5) {
        resolve("El numero si es 5")
    }else{
        reject("El numero no es 5 ")    
    }
})

promesa.then( res =>{
    console.log("Mensaje: " + res); 
})

.catch(error =>{
    console.log("Error: " + error); 
})