class cliente{
    nombreCliente;
    cedulaCliente;
}

class cuentaCorriente {
    numeroCuenta; 
    #saldoCuenta;
    oficina;

    constructor(){
        this.numeroCuenta = "";
        this.#saldoCuenta = 0;
        this.oficina = "";
    }

    depositoEnCuenta(valor){
        if(valor > this.#saldoCuenta){
            this.#saldoCuenta += valor;
        }
        return this.#saldoCuenta
    }

    retirarEnCuenta(valor){
        if (valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
        } else{
            console.log("No hay saldo suficiente para debitar")
        }
       return this.#saldoCuenta;
    }

    verSaldo(){
        return this.#saldoCuenta;
    }

}

cuantaJaime = new cuentaCorriente();

let saldo =  cuantaJaime.verSaldo();
console.log("El saldo de la cuenta es " + saldo);
saldo = cuantaJaime.depositoEnCuenta(200);
console.log("El saldo de la cuenta es " + saldo);
saldo = cuantaJaime.retirarEnCuenta(50)
console.log("El saldo de la cuenta es " + saldo);