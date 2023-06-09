const personaArreglo = ['Carlos',27,'correo@gmail.com',true,true];

const persona = {
    nombre:'Carlos',
    edad : 27,
    correo: 'correo@gmail.com',
    suscripciones:{
        Web:true,
        Correo:true,
    },
    coloresFavoritos:['Negro','Rojo'],
    saludo: function () {
        alert('Hola');
        
    }
}

// console.log(persona.nombre);
// console.log(persona['edad']);

const variable='suscripciones';

persona[variable];
console.log(persona.suscripciones.Correo);

persona.country ='México';

console.log(persona);

persona.saludo();
