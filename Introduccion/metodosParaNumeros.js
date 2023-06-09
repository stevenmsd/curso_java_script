/* 
    .toString()
    Tipo numero a cadena de texto.
*/

const numero = 10;
console.log(numero,typeof numero);

const texto=numero.toString();
console.log(texto,typeof texto);

/* 
    .toFixed()
    Permitir obtener un numero con la cantidad de decimales especificamos
*/

const numeroPi = 3.1426;
console.log(numeroPi.toFixed(10));

/* 
    .parseInt()
    Intenta transformar un valor a un entero.
*/

/* const numero1=parseInt(prompt('Escribe un numero'));
const numero2=parseInt(prompt('Escribe otro numero')); */

/* console.log(numero1+numero2); */


/* 
    .parseFloat()
    Intenta transformar un valor a un numero con decimales
*/

/* const numeroFloat1=parseFloat(prompt('Escribe un numero'));
const numeroFloat2=parseFloat(prompt('Escribe otro numero'));

console.log(numeroFloat1+numeroFloat2);
 */
/* 
    Math.random()
    Genera un numero al azar entre 0 y 1
*/

const numeroRandom= Math.random();
console.log(numeroRandom);

/* 
    Math.floor()
    Redondea hacia abajo un numero
*/
console.log(Math.floor(10.9));

/* 
    Math.ceil()
    Redondea hacia arriba un numero
*/

console.log(Math.ceil(10.1));

/* 
    Math.round()
    Redondea hacia el entero mas cercano
*/

console.log(Math.round('10.4'));

/* 
    Ejemplo un numero al azar de 0 a 100
*/

const numeroEjm=Math.random();
console.log(Math.floor(numeroEjm*101));