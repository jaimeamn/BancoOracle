export class Cuenta{
    #cliente;
    #saldoCuenta;

    constructor(cliente, numeroCuenta, oficina, saldoCuenta){
        if(this.constructor == Cuenta){
            throw new Error ("No se debe Instanciar objetos de la clase cuenta")
        }
        this.numeroCuenta = numeroCuenta
        this.oficina = oficina
        this.#cliente = cliente
        this.#saldoCuenta = saldoCuenta
    }

    depositoEnCuenta(valor){
        if(valor > this.#saldoCuenta){
            this.#saldoCuenta += valor;
        }
        return this.#saldoCuenta
    }

    retirarEnCuenta(valor, comision){
        throw new Error ("Debe implementar el metodo desde su propia clase")
        //this._retirarEnCuenta(valor, comision)

    }
    _retirarEnCuenta(valor, comision){
        valor = valor * (1 + comision/100);
        if (valor <= this.#saldoCuenta){
            this.#saldoCuenta -= valor;
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