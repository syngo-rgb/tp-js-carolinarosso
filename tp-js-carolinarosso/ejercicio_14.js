// Ingresar una palabra e identificar la letras distintas y sus repeticiones. Por ejemplo: PALA (P = 1, A = 2, L = 1). Utilizar un objeto literal
const palabra = prompt("Ingrese una palabra:").toUpperCase();
// Objeto para almacenar las letras y sus repeticiones
const letrasRepetidas = {};
// Iterar sobre cada letra de la palabra
for (let letra of palabra) {
    // Verificar si la letra ya existe en el objeto
    if (letrasRepetidas[letra]) {
        // Incrementar el contador de repeticiones si la letra ya existe
        letrasRepetidas[letra]++;
    } else {
        // Inicializar el contador de repeticiones si la letra no existe
        letrasRepetidas[letra] = 1;
    }
}
// Mostrar las letras distintas y sus repeticiones
let resultado = "";
for (let letra in letrasRepetidas) {
    resultado += letra + " = " + letrasRepetidas[letra] + ", ";
}
// Eliminar la coma final
resultado = resultado.slice(0, -2);
console.log(resultado);