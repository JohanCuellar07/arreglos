let bingo = [];
let iterar1;
let iterar2;
let acumulador = 0;

for (let iterar1 = 0; iterar1 < 5; iterar1++) {
    let interno = [];
    for (let iterar2 = 0; iterar2 < 5; iterar2++) {
        acumulador = acumulador + 1;
        interno [iterar2] = acumulador * 2;
    }
    bingo[iterar1] = interno;
}

for (let iterar1 = 0; iterar1 < 5; iterar1++) {
    for (let iterar2 = 0; iterar2 < 5; iterar2++) {
        console.log(bingo[iterar1][iterar2])
    }
    console.log("\n");
}

console.log("B")
for (let iterar2 = 0; iterar2 < 5; iterar2++) {
    console.log(bingo[iterar2][0])
}
console.log("\n")
console.log("I")
for (let iterar2 = 0; iterar2 < 5; iterar2++) {
    console.log(bingo[iterar2][1])
}
console.log("\n")
console.log("N")
for (let iterar2 = 0; iterar2 < 5; iterar2++) {
    console.log(bingo[iterar2][2])
}
console.log("\n")
console.log("G")
for (let iterar2 = 0; iterar2 < 5; iterar2++) {
    console.log(bingo[iterar2][3])
}
console.log("\n")
console.log("O")
for (let iterar2 = 0; iterar2 < 5; iterar2++) {
    console.log(bingo[iterar2][4])
}
console.log("\n")

function cruces(pbingo, px, py) {
    let bingo = pbingo;
    let x = px;
    let y = py;

    let cruz = [
        bingo [x][y],
        bingo [x][y+2],
        bingo [x+1][y+1],
        bingo [x+2][y],
        bingo [x+2][y+2],
    ];
    return cruz;
}

/*function cruces(pbingo, px, py) {
    let bingo = pbingo;
    let x = px;
    let y = py;
    
    for (let iterarx = x; iterarx < x + 3; iterarx++) {
        let cruz = '';
        for (let iterary = y; iterary < y + 3; iterary++) {
            cruz += bingo[iterarx][iterary] + ' ';
        }
        console.log(cruz);
    }
} */
