const usuario ={
    nombre:'Carlos',
    edad:27,
    amigos:['Alejandro','Cesar','Manuel'],
    saludo:()=>{
        console.log('Hola');
    }
}

/* 
    Métodos propios
    Los objetos pueden tener métodos personalizados
*/
usuario.saludo();

/* 
    Object.keys()
    Nos devuelve un arreglo con las llaves (keys) del Objeto.
*/
const resultados= Object.keys(usuario);

console.log(resultados);

/* 
    Object.values()
    Nos devuelve un arreglo con los valores (values) del objeto.
*/

const resultadosValues= Object.values(usuario);
console.log(resultadosValues);


/* 
    Object.entries()
    Nos devuelve un arreglo con las parejas de clave y valor del objeto.
*/

const resultadosEntries= Object.entries(usuario);
console.log(resultadosEntries);
console.log(`El objeto tiene ${resultados.length} propiedades`);