// Ingresar dos valores enteros y enumerar los elementos que los separan.
let valor1 = parseInt(prompt("Ingrese el primer valor entero:"));
let valor2 = parseInt(prompt("Ingrese el segundo valor entero:"));
// Verificar si los valores ingresados son números enteros válidos
if (isNaN(valor1) || isNaN(valor2)) {
    alert("Por favor, ingrese valores enteros válidos.");
} else {
    // Determinar el rango de números entre valor1 y valor2
    let inicio, fin;
    const separadores = [];

    if (valor1 < valor2) {
        inicio = valor1 + 1;
        fin = valor2 - 1;
    } else {
        inicio = valor2 + 1;
        fin = valor1 - 1;
    }

    // Enumerar los elementos que separan los dos valores
    for (let i = inicio; i < fin + 1; i++) {
        separadores.push(i);
    }

    // Mostrar los elementos separadores al usuario
    if (separadores.length === 0) {
        alert("No hay elementos entre " + valor1 + " y " + valor2 + ".");
    } else {
        alert("Los elementos entre " + valor1 + " y " + valor2 + " son: " + separadores.join(", "));
    }
}