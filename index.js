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
        
    }

    retirarEnCuenta(valor){
        if (valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
        } else{
            console.log("No hay saldo suficiente para debitar")
        }
       
    }

}

cuantaJaime = new cuentaCorriente();

cuantaJaime.depositoEnCuenta(200);
console.log(cuantaJaime);
cuantaJaime.retirarEnCuenta(500);

