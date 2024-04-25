// Ingresar tres valores e indicar cual es el mayor y cual el menor.



let valor1 = prompt("Ingrese el primer valor:");
valor1 = parseFloat(valor1);
let valor2 = prompt("Ingrese el segundo valor:");
valor2 = parseFloat(valor2);
let valor3 = prompt("Ingrese el tercer valor:");
valor3 = parseFloat(valor3);
let mayor = valor1;
let menor = valor1;
if (valor2 > mayor) {
    mayor = valor2;
}
if (valor3 > mayor) {
    mayor = valor3;
}
if (valor2 < menor) {
    menor = valor2;
}
if (valor3 < menor) {
    menor = valor3;
}
alert("El mayor valor es: " + mayor + "\nEl menor valor es: " + menor);