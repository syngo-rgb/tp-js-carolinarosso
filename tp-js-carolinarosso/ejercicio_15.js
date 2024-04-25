/*Crear un objeto literal con las siguiente propiedades: nombre, sexo biológico y edad. 
Agregar varios elementos a una lista. Obtener el promedio de edad, 
el nombre de la mujer con mayor edad, el nombre del hombre con menor edad, 
el promedio de edad de las mujeres. */

const personas = [
    { nombre: "Juan", sexo: "Hombre", edad: 30 },
    { nombre: "María", sexo: "Mujer", edad: 25 },
    { nombre: "Carlos", sexo: "Hombre", edad: 40 },
    { nombre: "Laura", sexo: "Mujer", edad: 35 }
];

function promedioEdad(lista) {
    const totalEdad = lista.reduce((acumulador, persona) => acumulador + persona.edad, 0);
    return totalEdad / lista.length;
}

function mujerMayorEdad(lista) {
    const mujeres = lista.filter(persona => persona.sexo === "Mujer");
    const mayorEdad = Math.max(...mujeres.map(mujer => mujer.edad));
    const mujerMayor = mujeres.find(mujer => mujer.edad === mayorEdad);
    return mujerMayor.nombre;
}

function hombreMenorEdad(lista) {
    const hombres = lista.filter(persona => persona.sexo === "Hombre");
    const menorEdad = Math.min(...hombres.map(hombre => hombre.edad));
    const hombreMenor = hombres.find(hombre => hombre.edad === menorEdad);
    return hombreMenor.nombre;
}

function promedioEdadMujeres(lista) {
    const mujeres = lista.filter(persona => persona.sexo === "Mujer");
    return promedioEdad(mujeres);
}

const promedioTotal = promedioEdad(personas);
const mujerMayor = mujerMayorEdad(personas);
const hombreMenor = hombreMenorEdad(personas);
const promedioMujeres = promedioEdadMujeres(personas);
console.log("Promedio de edad total:", promedioTotal);
console.log("Nombre de la mujer con mayor edad:", mujerMayor);
console.log("Nombre del hombre con menor edad:", hombreMenor);
console.log("Promedio de edad de las mujeres:", promedioMujeres); 