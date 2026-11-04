
class Vehiculo {
    arrancar() {
        console.log("El vehiculo esta arrancando.");
    }
}

class Coche extends Vehiculo {
    constructor(marca) {
        super();
        this.marca = marca;
    }

    mostrarMarca() {
        console.log("La marca del coche es: " + this.marca);
    }
}

let coche = new Coche("Toyota");

coche.arrancar();
coche.mostrarMarca();

