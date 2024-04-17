const arrayNums = [10, 77, 16, 3, 20, 96, 33, 65, 82, 45];
const arrayMayusculas = ["ABC", "DEF", "GHI", "JKL"];

function calcularCuadrado(numero) {
    return numero * numero;
}

const numCuadrados = arrayNums.map(calcularCuadrado);
console.log("Cuadrados de los números en el array: " + numCuadrados);

function duplicarNumero(numero) {
    return numero * 2;
}

const numDuplicados = arrayNums.map(duplicarNumero);
console.log("Elementos del array duplicados: " + numDuplicados);

function convertirAMinusculas(palabra) {
    return palabra.toLowerCase();
}

const arrayMinusculas = arrayMayusculas.map(convertirAMinusculas);
console.log("Elementos del array a minúsculas: " + arrayMinusculas);

