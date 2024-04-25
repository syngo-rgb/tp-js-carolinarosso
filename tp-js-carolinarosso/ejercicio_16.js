// - Para el ejercicio anterior, generar una funcion para cada uno de los requerimientos.
const personas = [
    { nombre: "Juan", sexo: "Hombre", edad: 30 },
    { nombre: "María", sexo: "Mujer", edad: 25 },
    { nombre: "Carlos", sexo: "Hombre", edad: 40 },
    { nombre: "Laura", sexo: "Mujer", edad: 35 }
];

function calcularPromedioEdad(lista) {
    const totalEdad = lista.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return totalEdad / lista.length;
}
function obtenerMujerMayorEdad(lista) {
    const mujeres = lista.filter(persona => persona.sexo === "Mujer");
    const mayorEdad = Math.max(...mujeres.map(mujer => mujer.edad));
    const mujerMayor = mujeres.find(mujer => mujer.edad === mayorEdad);
    return mujerMayor.nombre;
}
function obtenerHombreMenorEdad(lista) {
    const hombres = lista.filter(persona => persona.sexo === "Hombre");
    const menorEdad = Math.min(...hombres.map(hombre => hombre.edad));
    const hombreMenor = hombres.find(hombre => hombre.edad === menorEdad);
    return hombreMenor.nombre;
}
function calcularPromedioEdadMujeres(lista) {
    const mujeres = lista.filter(persona => persona.sexo === "Mujer");
    return calcularPromedioEdad(mujeres);
}

const promedioTotal = calcularPromedioEdad(personas);
const mujerMayor = obtenerMujerMayorEdad(personas);
const hombreMenor = obtenerHombreMenorEdad(personas);
const promedioMujeres = calcularPromedioEdadMujeres(personas);
console.log("Promedio de edad total:", promedioTotal);
console.log("Nombre de la mujer con mayor edad:", mujerMayor);
console.log("Nombre del hombre con menor edad:", hombreMenor);
console.log("Promedio de edad de las mujeres:", promedioMujeres);