// - Ingresar una palabra y un numero "n". Repetir la palabra "n" veces.
let palabra = prompt("Ingrese una palabra:");
let n = prompt("Ingrese un número:");
n = parseInt(n);
if (isNaN(n) || n < 1) {
    alert("Por favor, ingrese un número válido mayor que 0.");
} else {
    // Repetir la palabra "n" veces
    let resultado = "";
    const palabraRepetida = palabra + " "; 
    for (let i = 0; i < n; i++) {
        resultado += palabraRepetida;
    }
    alert("El resultado es: " + resultado);
}
