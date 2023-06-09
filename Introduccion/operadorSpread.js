/* 
    Operador Spread
    Permite tomar los elementos de un arreglo u objeto y expandirlos en otro sitio.
*/

const frutas=['Manzana','Pera','Piña','Melon','Uva'];
const comidaFavorita=['Pizza','Sushi',...frutas];

console.log(comidaFavorita);

const datosLogin={
    nombre:'Arturo',
    correo: 'correo@gmail.com',
    password:'123'
}
const usuario={
    ...datosLogin,
    nombre:'Carlos',
    edad:'7',
}

console.log(usuario);


/* 
    Parámetro Rest
    Permite que una función contenga un numero indefinido de argumentos
    Los argumentos extra que encuentre los convertirá en un arreglo
*/

const registrarUsuario = (nombre,correo,...datosAdicionales)=>{
    console.log(nombre,correo,datosAdicionales);

}
registrarUsuario('Carlos','correo@gmail.com');
registrarUsuario('Carlos','correo@gmail.com',28,'Ecuador');


/* 
    Destructuracion de objetos
    Nos permite obtener elementos o propiedades de un arreglo u objeto y guardarlos 
    en un variable.
*/
const amigos=['Alejandro','Cesar','Manuel'];
/* const primerAmigo = amigos[0];
const segundoAmigo = amigos[1]; */

const [primerAmigo,segundoAmigo,tercerAmigo]=amigos;

console.log(primerAmigo);


const persona = {
    nombre: 'Carlos',
    edad:27,
    pais:'Mexico',
}

const{nombre,pais,edad}=persona;
console.log(nombre,pais);



const mostrarEdad=({nombre,edad})=>{
    console.log(`${nombre}tiene ${edad} años`);
}

mostrarEdad(persona);