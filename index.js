import {Cliente} from "./cliente.js";
import {CuentaCorriente} from "./cuentaCorriente.js";
import { CuentaAhorro } from "./CuentaAhorro.js";
import {Cuenta} from "./cuenta.js";


//instanciar clientes(Crearlos)

const cliente  = new Cliente("Jaime", "12547655", "2121414");
const cliente2 = new Cliente("Yessica",  "12545555", "54785");

//Instanciar Cuenta Corriente
const cuantaJaime = new CuentaCorriente(cliente, "2354", "001");
const cuantaYessica = new CuentaCorriente(cliente2, "02", "002");

//Depositar Dinero en cuenta Jaime
cuantaJaime.depositoEnCuenta(500);
//Versaldo en cuenta
const saldo =  cuantaJaime.verSaldo();
console.log(saldo);
//Transferir dinero
cuantaJaime.transferirParaCuenta(100, cuantaYessica);
let saldoYessica = cuantaYessica.verSaldo();
console.log(saldoYessica);

//retirar de cuenta
cuantaYessica.retirarEnCuenta(50)
saldoYessica = cuantaYessica.verSaldo()
console.log(saldoYessica);
//Ver numero de cuantas Corrientes creadas
const nCuentas = CuentaCorriente.cantidadCuentas;
console.log(nCuentas);

const cuentaAhorroJaime = new CuentaAhorro(cliente, "123456", "01", 0)
console.log(cuentaAhorroJaime);