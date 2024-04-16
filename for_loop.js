const arrayNums = [10, 77, 16, 3, 20, 96, 33, 65, 82, 45]; 
let suma = 0;
let maximo = 0;
let arrayInvertido = [...arrayNums].reverse();

// sumar todos los elementos del array
for (let i = 0; i < arrayNums.length; i++) {
    suma += arrayNums[i];
}

// encontrar el elemento más grande del array con Math.max
maximo = Math.max(...arrayNums);

console.log("La suma de los elementos del array es: " + suma);
console.log("El elemento más grande del array es: " + maximo);
console.log("Elementos del array: " + arrayNums);
console.log("Elementos del array en orden inverso: " + arrayInvertido);
