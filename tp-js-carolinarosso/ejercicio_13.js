// Sumar solo los elementos pares de un array.
const array = [5, 10, 15, 20];
let sumaPares = 0;
// Iterar sobre el array y sumar solo los elementos pares
for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
        sumaPares += array[i];
    }
}
console.log("La suma de los elementos pares del array es: " + sumaPares);