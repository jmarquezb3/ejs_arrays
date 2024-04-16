const arrayNums = [10, 77, 16, 3, 20, 96, 33, 65, 82, 45];
let suma = 0;

// recorrer el array y mostrar el doble de cada elemento
console.log("Elementos del array (x2): ");
arrayNums.forEach(num => console.log("Original: " + num + " - (x2): " + num*2));

// funcion sumar
function sumar(numero) {
    suma += numero;
}

// recorrer el array y llamar a la funcion sumar
arrayNums.forEach(sumar);

console.log("Suma de todos los elementos del array: " + suma);
