function calcularTabla(pnumTab){
    let numTab = pnumTab;
    let tabla = [];

    for (let iterarx = 1; iterarx <= 5; iterarx++) {
        tabla.push([iterarx, iterarx * numTab]);        
    }

    return tabla;
}
function impresion(pnumTab){
    let numTab = pnumTab;
    let tablaMul = calcularTabla(numTab);

    for (let iterary = 0; iterary < 5; iterary++) {
        console.log(tablaMul[iterary][0]+" * "+numTab+" = "+tablaMul[iterary][1]);    
    }
    return ":)";
}
