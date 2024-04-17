const arrayNums = [10, 77, 16, 3, 20, 96, 33, 65, 82, 45];
const arrayMayusculas = ["ABC", "DEF", "GHI", "JKL"];

const arrayPares = arrayNums.filter(num => num % 2 == 0);
console.log("Filtrar números pares del array: " + arrayPares);

const arrayMayorQue = arrayNums.filter(num => num > 50);
console.log("Filtrar números mayor que 50: " + arrayMayorQue);

const arrayCadena = arrayMayusculas.filter(palabra => palabra.includes("K"));
console.log("Filtrar una letra en una cadena: " + arrayCadena);
