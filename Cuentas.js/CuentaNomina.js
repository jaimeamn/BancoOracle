import { Cuenta } from "./cuenta.js";
export class CuentaNomina extends Cuenta{
    constructor(cliente, numeroCuenta, oficina, saldo ){
        super(cliente, numeroCuenta, oficina, saldo);
    }
    retirarEnCuenta(valor){
        super._retirarEnCuenta(valor, 1);
     
    }
}