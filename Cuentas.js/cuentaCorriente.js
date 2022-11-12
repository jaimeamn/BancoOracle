import { Cliente } from "../cliente.js";
import { Cuenta } from "./cuenta.js";

export class CuentaCorriente extends Cuenta {
   
    static cantidadCuentas = 0;
   
    constructor(cliente, numeroCuenta, oficina){
        super(cliente, numeroCuenta, oficina, 0);
        CuentaCorriente.cantidadCuentas++;

    }
    retirarEnCuenta(valor){
        super._retirarEnCuenta(valor, 5);
     
    }

   
}