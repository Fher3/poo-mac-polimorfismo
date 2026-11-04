
class Inventario {
    constructor() {
        this.productos = [];
    }

    agregarProducto(nombre, cantidad) {
        if (cantidad > 0) {
            this.productos.push([nombre, cantidad]);
            console.log("Producto agregado.");
        } else {
            console.log("La cantidad debe ser mayor a 0.");
        }
    }
}

let inventario = new Inventario();

inventario.agregarProducto("Laptop", 5);
inventario.agregarProducto("Mouse", 0);

console.log(inventario.productos);

