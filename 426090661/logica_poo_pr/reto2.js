class CuentaBancaria {
    constructor(saldo) {
        this.saldo = saldo;
    }

    retirar(monto) {
        if (this.saldo >= monto) {
            this.saldo = this.saldo - monto;
            console.log("Retiro exitoso.");
            console.log("Saldo actual: " + this.saldo);
        } else {
            console.log("Fondos insuficientes.");
        }
    }
}

let cuenta = new CuentaBancaria(1000);

cuenta.retirar(300);
cuenta.retirar(900);

