// - Mostrar los multiplos de 2 y 5 menores a 100.
let multiplos = [];
for (let i = 1; i * 2 < 100; i++) {
    multiplos.push(i * 2);
}

for (let i = 1; i * 5 < 100; i++) {
    multiplos.push(i * 5);
}
// Eliminar duplicados y ordenar el arreglo
multiplos = Array.from(new Set(multiplos)).sort((a, b) => a - b);
alert("Los múltiplos de 2 y 5 menores a 100 son: " + multiplos.join(", "));