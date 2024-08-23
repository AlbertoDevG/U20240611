let fecha = new Date(2012, 1, 20, 3, 12);
let opciones = {year :'numeric', month:'short', day:'numeric', hour: 'numeric', minute: 'numeric'}

console.log(fecha.toLocaleString('en-us', opciones));
