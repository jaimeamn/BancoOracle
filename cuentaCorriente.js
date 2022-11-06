export class cuentaCorriente {
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