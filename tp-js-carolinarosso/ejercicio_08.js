// Ingresar dos números y mostrar los múltiplos de 3 comprendidos entre ambos.
let numero1 = parseInt(prompt("Ingrese el primer número:"));
let numero2 = parseInt(prompt("Ingrese el segundo número:"));
if (isNaN(numero1) || isNaN(numero2)) {
    alert("Por favor, ingrese números válidos.");
} else {
    let menor = Math.min(numero1, numero2);
    let mayor = Math.max(numero1, numero2);
    let multiplosDe3 = [];
    for (let i = menor; i <= mayor; i++) {
        if (i % 3 === 0) {
            multiplosDe3.push(i);
        }
    }
    if (multiplosDe3.length === 0) {
        alert("No hay múltiplos de 3 comprendidos entre " + menor + " y " + mayor + ".");
    } else {
        alert("Los múltiplos de 3 comprendidos entre " + menor + " y " + mayor + " son: " + multiplosDe3.join(", "));
    }
} 

