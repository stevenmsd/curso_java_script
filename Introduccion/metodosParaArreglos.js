const colores=['Rojo','Verde','Azul'];

/* .length
    (propiedad) - Nos permite conocer la cantidad de elementos de un arreglo.
*/

console.log(colores.length);

/* .toString() 
    Nos permite transformar un arreglo a una cadena de texto.
    Por ejemplo para poder mostrarlo en el navegador.
*/

/* document.body.innerHTML= colores.toString(); */

/* .join()
    Nos permite transformar un arreglo a una cadena de texto y separar cada elemento.
*/

console.log(colores.join('-'));


/*  .sort()
Nos permite ordenar un arreglo de cadenas de texto, de forma alfabética */

const letras=['c','b','d','a'];
console.log(letras.sort());

const numeros=[3,6,2,1,5,7,8,4];
console.log(numeros.sort());

/* .reverse()
    Nos permite ordenar un arreglo de forma descendente.
 */

console.log(letras.reverse());
console.log(numeros.reverse());

/* .concat()
    Nos permite juntar dos arreglos en uno solo.
 */
const arreglo1=[1,2,3];
const arreglo2=['A','B','C'];
const arreglo3=arreglo1.concat(arreglo2);
console.log(arreglo3);


/* .push()
    Nos permite agregar un elemento al final de un arreglo.
*/
colores.push('Amarillo');
console.log(colores);


/* 
    .pop()
    Nos permite eliminar el ultimo elemento de un arreglo
*/

colores.pop();

console.log(colores);

/* 
    .shift()
    Eliminar el primer elemento de un arreglo y recorre los elementos.
*/
const dias =['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
console.log(dias);
const diaEliminado=dias.shift();
console.log(dias);
console.log(diaEliminado);

/* 
    .unshift()
    Agrega un elemento al inicio del arreglo y empuja los elementos.
*/

dias.unshift('Carlos');
console.log(dias);


/* 
    .splice()
    Nos permite insertar elementos a un arreglo donde le especifiquemos.
    -1er parámetro - Posición donde queremos comenzar a insertar elementos.
    -2do parámetros - Si queremos eliminar elementos del arreglo desde la posicion indicada.
    -Resto de parámetros -Los elementos a insertar.
*/

const amigos=['Alejandro','Cesar','Manuel'];
amigos.splice(0,0,'Rafael','Juan','Cristian');

console.log(amigos);



/* 
    .slice()
    Nos permite copiar una parte de un arreglo a otra.
    - 1er parámetro - Posición desde donde queremos copiar.
    - 2do parámetro - Hasta antes de que elemento copia.
*/

const frutas=['Fresa','Manzana','Uva','Mango','Naranja','Melon']
const frutasFavoritas = frutas.slice(1,10);
console.log(frutasFavoritas);