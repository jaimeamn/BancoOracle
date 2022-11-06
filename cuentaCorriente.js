export class CuentaCorriente {
    #cliente;
    numeroCuenta; 
    oficina;
    #saldoCuenta;
    static cantidadCuentas = 0;
   
    set cliente(valor){
        this.#cliente = valor;
    }

    get cliente(){
        return this.#cliente;
    }

    constructor(cliente, numeroCuenta, oficina){
        this.cliente = cliente;
        this.numeroCuenta = numeroCuenta
        this.oficina = oficina;
        this.#saldoCuenta = 0;
        CuentaCorriente.cantidadCuentas++;

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

    transferirParaCuenta(valor, cuentaDestino){
        this.retirarEnCuenta(valor);
        cuentaDestino.depositoEnCuenta(valor);

    }

}