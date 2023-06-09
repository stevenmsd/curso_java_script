
/*  Operadores de Comparación:
  Nos permiten comparar valores
    == Igual que 
    === Igual en valor y tipo de valor
    != Diferente 
    !== Diferente en valor y diferente tipo
    > Mayor que 
    < Menor que 
    >= Mayor o igual que 
    <= Menor o igual que 
    ? Operador Ternario
*/
/* Operadores Lógicos 
    && And 
    || Or 
    ! Not 
*/

// Estructura condicional

// const usuario={
//     edad:16,
//     country:'México',
//     ticket:true,
// }

// if(usuario.edad > 17){
//     console.log('El usuario es mayor de edad puede entrar al concierto');
// }else{
//     console.log('El usuario es menor de edad no puede entrar');
// }

// const usuario={
//     edad:18,
//     country:'México',
//     ticket:false,
// }

// if(usuario.edad>=18 && usuario.ticket){
//     console.log('Entrada exitosa');
// }else{
//     console.log('Entrada Denegada');
// }


// const usuario={
//     edad:18,
//     country:'México',
//     ticket:false,
// }

// if (usuario>=18) {
//     if(usuario.ticket){
//         console.log('El usuario es mayo de edad y tiene ticket.');
//     }
// }


const usuario={
    edad:18,
    country:'colombia',
    ticket:false,
}


if(usuario.country==='colombia'){
    console.log('El usuario es colombiano');
}
