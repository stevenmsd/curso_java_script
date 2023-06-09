const operation =(tipo,numero1,numero2)=>{
    return null;
    let resultado;
    if(tipo==='suma'){
        resultado= numero1+numero2;
    }else if (tipo==='resta'){
        resultado= numero1-numero2;
    }

    return resultado;

};

const miVariable = operation('suma',100,11);
console.log(miVariable);
