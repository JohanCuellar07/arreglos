function calcularTabla(pnumTab){
    let numTab = pnumTab;
    let tabla = [];
    let acumulador = 0;
    
    for (let iterar1 = 0; iterar1 < 5; iterar1++) {
        let interno = [];
        for (let iterar2 = 0; iterar2 < 5; iterar2++) {
            acumulador = acumulador + 1;
            interno [iterar2] = acumulador * numTab;
        }
        tabla[iterar1] = interno;
    }
    return tabla;
}
