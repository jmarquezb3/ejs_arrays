const arrayNums = [10, 77, 16, 3, 20, 96, 33, 65, 82, 45];
const arrayMayusculas = ["ABC", "DEF", "GHI", "JKL"];

function esPrimo(numero) {
    let esPrimo = true;
    if (numero <= 1) {
        esPrimo = false;
    }
    
    for (let i = 2; i <= Math.sqrt(numero); i++) {
        if (numero % i === 0) {
            esPrimo = false;
        }
    }
    
    if (esPrimo) {
        return(numero);
    }
}

const numPrimo = arrayNums.find(esPrimo);
console.log("Primer número primo: " + numPrimo);

const condicion = arrayMayusculas.find(palabra => palabra === "JKL");
console.log("Buscar la palabra \"JKL\": " + condicion);

const contener = arrayMayusculas.find(palabra => palabra.includes("H"));
console.log("Buscar una cadena que contenga \"H\": " + contener);

