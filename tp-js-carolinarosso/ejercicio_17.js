/* Crear una funcion que reciba 3 parametros: minimo, maximo y divisor. 
Devolver una lista con los divisores del numero ingresado.*/
function obtenerDivisores(minimo, maximo, divisor) {
    const divisores = [];
    for (let i = minimo; i <= maximo; i++) {
        if (i % divisor === 0) {
            // Agregar el número a la lista de divisores
            divisores.push(i);
        }
    }
    // Devolver la lista de divisores
    return divisores;
}
const minimo = 1;
const maximo = 20;
const divisor = 3;
const listaDivisores = obtenerDivisores(minimo, maximo, divisor);
console.log("Divisores entre", minimo, "y", maximo, "divisibles por", divisor, ":", listaDivisores);