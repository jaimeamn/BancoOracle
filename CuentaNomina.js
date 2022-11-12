import { Cuenta } from "./cuenta";
export class CuentaNomina extends Cuenta{
    constructor(cliente, numeroCuenta, oficina, saldo ){
        super(cliente, numeroCuenta, oficina, saldo);
    }
    retirarEnCuenta(valor){
        super.retirarEnCuenta(valor, 1);
     
    }
}