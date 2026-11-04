
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

class Profesor extends Persona {
    calificar(arregloCalificaciones) {
        let aprobados = 0;
        let reprobados = 0;

        for (let i = 0; i < arregloCalificaciones.length; i++) {
            if (arregloCalificaciones[i] >= 6) {
                aprobados++;
            } else {
                reprobados++;
            }
        }

        console.log("Profesor: " + this.nombre);
        console.log("Alumnos aprobados: " + aprobados);
        console.log("Alumnos reprobados: " + reprobados);
    }
}

let profesor = new Profesor("Carlos");

let calificaciones = [8, 5, 9, 4, 6, 7, 3];

profesor.calificar(calificaciones);

