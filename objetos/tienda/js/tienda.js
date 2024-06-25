/**
 * Tienda usando javascript
 * Autor: Johan Cuellar
 * 30 abril del 2024
 */

let tienda = [];
let numeroRegistros;
let iterar;
let nuevoProducto;
let listaBusqueda = [];
tienda = [
    {
        producto:'Arroz', 
        tipoProducto: 'granos', 
        tipoUnidad: 'gramos', 
        cantidad: 1000, 
        precio: 2450
    },
    {
        producto:'Papa', 
        tipoProducto: 'fruver', 
        tipoUnidad: 'gramos', 
        cantidad: 500, 
        precio: 1000
    },
    {
        producto:'Mora', 
        tipoProducto: 'fruver', 
        tipoUnidad: 'gramos', 
        cantidad: 500, 
        precio: 1500
    },
    {
        producto:'Trucha', 
        tipoProducto: 'carnes', 
        tipoUnidad: 'gramos', 
        cantidad: 100, 
        precio: 9000
    },
    {
        producto:'Pollo Entero', 
        tipoProducto: 'carnes', 
        tipoUnidad: 'gramos', 
        cantidad: 500, 
        precio: 4500
    }
];

nuevoProducto = {producto:'Res', tipoProducto: 'carnes', tipoUnidad: 'gramos', cantidad: 500, precio: 7500};
tienda.push(nuevoProducto);

tienda[2].precio = 3000; //modifica un dato de una propiedad de un objeto en un arreglo

numeroRegistros = tienda.length;

for (let iterar = 0; iterar < numeroRegistros; iterar++) { //itera todo el arreglo "tienda"
    console.log(tienda[iterar]);
}

/*
for (let iterar = 0; iterar < numeroRegistros; iterar++) { //itera los objetos del arreglo "tienda" cuando "tipProducto" es igual a "fruver"
    if (tienda[iterar].tipoProducto == 'fruver') {
        listaBusqueda.push(tienda[iterar]);    
    }
    else{
        console.log("");
    }
}
console.log(listaBusqueda);
 */