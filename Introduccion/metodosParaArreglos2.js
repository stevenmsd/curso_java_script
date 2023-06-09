/* 
    .indexOf()
    Obtenemos el primer index de un elemento.
    Si no hay elemento nos retorna -1
*/

const nombres = ['Carlos','Rafael','Estefania','Rodrigo','Rafael','Gema','Diana','Sara',45];
console.log(nombres.indexOf('Estefania'));

/* 
    .lastIndexOf()
    Obtener el ultimo index de un elemento.
*/

console.log(nombres.lastIndexOf('Rafael'));

/* 
    .forEach()
    Nos permite ejecutar una funcion por cada elemento
*/

const forEachCom= nombres.forEach((nombre)=>{
    /* console.log(`Hola ${nombre} y su numero es ${index}`);
    return 'Hola'; */
    if(nombre[0]==='E'){
        return nombre;
    }
} );
console.log(forEachCom);
/* 
 .find()
 Nos permite recorrer un arreglo y devuelve el PRIMER elemento que retornemos
*/

const resultado=nombres.find((nombre)=>{
    if(nombre[0]==='R'){
        return nombre;
    }
});
console.log(resultado);





/* 
    .map()
    Nos permite ejecutar una función por cada elemento y crear un nuevo arreglo
    en base a los resultados de esa función
*/

const nombresMayusculas = nombres.map(
   /*  (nombre)=>nombre.toUpperCase() */
   (nombre)=>{
    if (nombre.length === 4) {
        return nombre;
    }

}
    );
console.log(nombresMayusculas);


/*  
    .filter()
    Nos permite ejecutar una función por cada elemento 
    y luego crear un arreglo en base a los resultados de esa función 
*/

const nombre4Letras = nombres.filter((nombre)=>{
    if (nombre.length === 4) {
        return nombre;
    }

});

console.log(nombre4Letras);


/* 
    .includes()
    Nos permite saber si el arreglo contiene un elemento especificado
*/

console.log(nombres.includes('Carlos'));


/* 
    .every()
    Nos permite ejecutar una condicional sobre cada elemento y 
    nos devuelve true si TODOS los elementos cumplieron la condición.
*/

const nombresValidos= nombres.every((nombre)=>{
if (typeof nombre==='string') {
    return true;
}else{
    false
}
});

console.log('Todos los nombres son validos? ' + nombresValidos);


/* 
    .some()
    Nos permite ejecutar un condicional sobre cada elemento y 
    nos devuelve true si algún elemento cumplió la condición.
*/
const nombresSome= nombres.some((nombre)=>{
    if (typeof nombre!=='string') {
        return true;
    }else{
        false
    }
    });
    // Si hay algún valor valido devuelve true
    // Caso contrario devuelve false
    console.log('Algun elemento cumple la condición ? ' + nombresSome);
