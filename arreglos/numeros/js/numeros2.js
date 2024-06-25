function contarNum(pnum){
    let num = pnum;
    let numeros = [];

    for(let contar = 0; contar < num; contar++){
        numeros[contar] = contar + 1;
    }
    return numeros;
}

function contarNumPar(pnum){
    let num = pnum;
    let numeros = [];

    for(let contar = 0; contar < num; contar++){
        if (contar%2) {
            numeros[contar] = contar + 1;        
        }
        else{
            numeros[contar] = '';        
        }
    }
    return numeros;
}

function contarNumImpar(pnum){
    let num = pnum;
    let numeros = [];

    for(let contar = 0; contar < num; contar++){
        if (contar%2) {
            numeros[contar] = "";        
        }
        else{
            numeros[contar] = contar + 1;        
        }
    }
    return numeros;
}