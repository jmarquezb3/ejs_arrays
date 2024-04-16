const arrayNums = [10, 77, 16, 3, 20, 96, 33, 65, 82, 45];
let suma = 0;
let numPares = 0;

// recorrer el array y mostrar el doble de cada elemento
console.log("Elementos del array: ");
arrayNums.forEach(num => console.log("Original: " + num + " - (x2): " + num*2));

// funcion sumar
function sumar(numero) {
    suma += numero;
}

// funcion contar pares
function contarPares(numero) {
    if (numero%2 == 0) {
        numPares++;
    }
}

// recorrer el array, llamar a la funcion sumar y contarPares
arrayNums.forEach(sumar);
arrayNums.forEach(contarPares);

console.log("Suma de todos los elementos del array: " + suma);
console.log("Cantidad de números pares en el array: " + numPares);
