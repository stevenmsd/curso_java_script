/* Block Scope / Alcance de tipo bloque
    - Pertenecen las variables declaradas con const o let dentro de un bloque {}
    - Solo podemos acceder a ellas dentro del bloque
*/

/* const edad =19;
if(edad>=18){
    const accesoPermitido = true;
    

    if(true){
        console.log(accesoPermitido);
    }

    const miFuncion = ()=>{
        console.log(accesoPermitido);
    }
    miFuncion();
}
const accesoPermitido='si';
console.log(accesoPermitido); */


if (true) {
    var nombre = 'Carlos';
   
}

console.log(nombre);