/* Tipos de datos que podemos guardar en las variables:
    string - Cadenas de Texto
    number - Numero
    boolean - Booleano (verdadero o falso)
    object - Objeto
    function - Funciones
    null - Valor nulo 
    undefined - Valor sin definir
*/


// Cadena de Texto
const nombre ='Carlos';
const paragraph = 'Este es un párrafo';
const paragraph2 = 'Este es un \'párrafo\'';

// console.log(paragraph2);

// Numero 

const number=4;
const numero2=-4.123

// Boolean

const usuarioConectado =true;
const mayorQue=1>2;
// console.log(mayorQue);
// console.log(usuarioConectado);


// Arrays - Arreglos 
const arreglo =[1,10,'2',true,{propiedad:'valor'},[1,2,3]];
// console.log(arreglo);

// Objeto

const persona={
    nombre: 'Carlos',
    edad:27,
    carro:{
        marca:'...',
        color:'negro',

    }
};

// console.log(persona.carro.color);


// Function
function hola() {
    for (let index = 0; index < 20; index++) {
        console.log('Hola');
        console.log(index);
        
    }
}

hola()


