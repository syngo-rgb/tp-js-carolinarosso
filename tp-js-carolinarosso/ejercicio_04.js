// Ingresar un número e indicar si es par.
let numero = prompt("Ingrese un número:");
// Convertir el valor ingresado a un número entero
numero = parseInt(numero);
if (numero % 2 === 0) {
    alert(numero + " es un número par.");
} else {
    alert(numero + " no es un número par.");
}
