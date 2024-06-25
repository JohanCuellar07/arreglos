let numRegistros;
let iterar;
let tabla = [];
let nomina = [];
nomina = [
    {
        id: 8572036198, 
        nombres: 'Sofia', 
        apellidos: 'Johnson Martinez', 
        cargo: 'Gerente', 
        valorDia: 120000, 
        diasTrabajados: 12
    },
    {
        id: 4321657890, 
        nombres: 'Liam', 
        apellidos: 'Rodriguez Wilson', 
        cargo: 'Analista', 
        valorDia: 100000, 
        diasTrabajados: 28
    },
    {
        id: 9078563210, 
        nombres: 'Mia', 
        apellidos: 'Anderson Perez', 
        cargo: 'Director', 
        valorDia: 150000, 
        diasTrabajados: 5
    },
    {
        id: 6543201987, 
        nombres: 'Mason', 
        apellidos: 'Smith Nguyen', 
        cargo: 'Supervisor', 
        valorDia: 80000, 
        diasTrabajados: 20
    },
    {
        id: 1234567890, 
        nombres: 'Amelia', 
        apellidos: 'Lee Jackson', 
        cargo: 'Coordinador', 
        valorDia: 100000, 
        diasTrabajados: 3
    },
    {
        id: 9876543210, 
        nombres: 'Benjamin', 
        apellidos: 'Gonzalez White', 
        cargo: 'Ingeniero', 
        valorDia: 150000, 
        diasTrabajados: 17
    },  
    {
        id: 2468013579, 
        nombres: 'Charlotte', 
        apellidos: 'Lopez Ramirez', 
        cargo: 'Jefe', 
        valorDia: 120000, 
        diasTrabajados: 25
    },  
    {
        id: 5802468139, 
        nombres: 'Dylan', 
        apellidos: 'Martinez Thompson', 
        cargo: 'Especialista', 
        valorDia: 100000, 
        diasTrabajados: 9
    },  
    {
        id: 3698521470, 
        nombres: 'Emma', 
        apellidos: 'Wilson Garcia', 
        cargo: 'Consultor', 
        valorDia: 150000, 
        diasTrabajados: 14
    },  
    {
        id: 7159364820, 
        nombres: 'Ethan', 
        apellidos: 'Perez Hernandez', 
        cargo: 'Jefe', 
        valorDia: 120000, 
        diasTrabajados: 14
    }
];

numRegistros = nomina.length;

for (let iterar = 0; iterar < numRegistros; iterar++){
    console.log(nomina[iterar]);
};

function salario(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let totalSalario;

    totalSalario = diasTrabajados * valorDia;

    return totalSalario;
}

function subsidioTra(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let salarioMin = 1300000;
    let subsidioTrans = salario(diasTrabajados, valorDia);
    let subsidioTransporte;

    if (subsidioTrans < 2 * salarioMin){
        subsidioTransporte = 120000;
    }
    else{
        subsidioTransporte = 0;
    }

    return subsidioTransporte;
}

function retencion(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let salarioMin = 1300000;
    let valorRet = salario(diasTrabajados, valorDia);
    let valorRetencion;

    if (valorRet > 12 * salarioMin){
        valorRetencion = valorRet * 0.08;
    }
    else{
        if (valorRet > 8 * salarioMin){
            valorRetencion = valorRet * 0.04;
        }
        else{
            if (valorRet > 6 * salarioMin){
                valorRetencion = valorRet * 0.02;
            }
            else{
                valorRetencion = 0;
            }
        }
    }

    return valorRetencion;
}

function retencionn(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let salarioMin = 1300000;
    let valorRet = salario(diasTrabajados, valorDia);
    let valorRetencion;

    switch (true) {
        case (valorRet > 12 * salarioMin):
            valorRetencion = valorRet * 0.08;
            break;
        case (valorRet > 8 * salarioMin):
            valorRetencion = valorRet * 0.04;
            break;
        case (valorRet > 6 * salarioMin):
            valorRetencion = valorRet * 0.02;
            break;
        default:
            valorRetencion = 0;
            break;
    }
    return valorRetencion;
}


function salud(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSalud;

    pagoSalud = salario(diasTrabajados, valorDia) * 0.12;

    return pagoSalud;
}

function pension(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoPension;

    pagoPension = salario(diasTrabajados, valorDia) * 0.16;

    return pagoPension;
}

function arl(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoArl;

    pagoArl = salario(diasTrabajados, valorDia) * 0.052;

    return pagoArl;
}

function deducibles(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoDeducibles;
    
    pagoDeducibles = salud(diasTrabajados, valorDia) + pension(diasTrabajados, valorDia) + arl(diasTrabajados, valorDia);

    return pagoDeducibles;
}

function pagoTotal(pdiasTrabajados, pvalorDia){
    let diasTrabajados = pdiasTrabajados;
    let valorDia = pvalorDia;
    let pagoSueldo;

    pagoSueldo = salario(diasTrabajados, valorDia) + subsidioTra(diasTrabajados, valorDia) - retencion(diasTrabajados, valorDia) - deducibles(diasTrabajados, valorDia);

    return pagoSueldo;
}

let saludNom = 0;
let pensionNom = 0;
let arlNom = 0;
let retencionNom = 0;
let totalNom = 0;

for (let iterar = 0; iterar < numRegistros; iterar++){    
    tabla[iterar] = [
        nomina[iterar].id,
        nomina[iterar].nombres,
        nomina[iterar].cargo,
        salario(nomina[iterar].diasTrabajados, nomina[iterar].valorDia),
        subsidioTra(nomina[iterar].diasTrabajados, nomina[iterar].valorDia),
        salud(nomina[iterar].diasTrabajados, nomina[iterar].valorDia),
        pension(nomina[iterar].diasTrabajados, nomina[iterar].valorDia),
        arl(nomina[iterar].diasTrabajados, nomina[iterar].valorDia),
        retencion(nomina[iterar].diasTrabajados, nomina[iterar].valorDia),
        pagoTotal(nomina[iterar].diasTrabajados, nomina[iterar].valorDia),
    ]
    saludNom = saludNom + salud(nomina[iterar].diasTrabajados, nomina[iterar].valorDia);
    pensionNom = pensionNom + pension(nomina[iterar].diasTrabajados, nomina[iterar].valorDia);
    arlNom = arlNom + arl(nomina[iterar].diasTrabajados, nomina[iterar].valorDia);
    retencionNom = retencionNom + retencion(nomina[iterar].diasTrabajados, nomina[iterar].valorDia);
    totalNom = totalNom + pagoTotal(nomina[iterar].diasTrabajados, nomina[iterar].valorDia);

};
console.log(tabla);

let totalPagos = [saludNom, pensionNom, arlNom, retencionNom, totalNom];

console.log(totalPagos);