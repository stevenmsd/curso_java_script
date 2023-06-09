/*
    .legth - Devuelve el numero de caracteres de una cadena de texto.
*/

const texto='Hola yo soy Carlos!'
console.log(texto.length);

/* 
    .indexOf() .lastIndexOf() 
    - Devuelve el index del primer/ultimo carácter especificado.
*/
console.log(texto.indexOf('C'));
console.log(texto.lastIndexOf('!'));



/* 
    .slice() - Devuelve un fragmento de una cadena de texto.
    1er parámetro - Index desde donde queremos cortar
    2do parámetro(opcional)- Index hasta donde queremos cortar
*/

console.log(texto.slice(12,18));

/* 
    .replace() 
    - Devuelve una cadena de texto en donde remplaza un valor por otro.
    1er parámetro - el texto que queremos remplazar
    2do parámetro - el texto que queremos poner
*/

console.log(texto.replace('Carlos','Arturo'));

/* 
    .split() 
    - Convierte una cadena de texto en un arreglo.
    Tenemos que especificar donde cortar cada elemento.
    1er parámetro - el carácter que funcionara como separador.
*/
const arregloSplit=texto.split(' ');
console.log(arregloSplit);

/* 
    .toUpperCase() .toLowerCase()
    Devuelve una cadena de texto de puras minúsculas/mayúsculas.
*/

console.log(texto.toUpperCase());
console.log(texto.toLowerCase());