import {Cliente} from "./cliente.js";
import {CuentaCorriente} from "./Cuentas.js/cuentaCorriente.js";
import { CuentaAhorro } from "./Cuentas.js/CuentaAhorro.js";
import {Cuenta} from "./Cuentas.js/cuenta.js";
import { Empleado } from "./Cuentas.js/Empleados/Empleado.js";
import { Gerente } from "./Cuentas.js/Empleados/Gerente.js";
import { Director } from "./Cuentas.js/Empleados/Director.js";
import { SistemaAutenticacion } from "./SistemaAutenticacion.js";

//instanciar clientes(Crearlos)

const cliente  = new Cliente("Jaime", "12547655", "2121414");
cliente.asignarClave("1234")
console.log(SistemaAutenticacion.login(cliente, "1234"))
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


const empleado = new Empleado("Jaime Martinez", "1143231049", 500000);
empleado.asignarClave("12345")
const gerente = new Gerente("Juan Noguera", " 4554545", 400000);
const director = new Director("Yessica Martinez", "11245785", 800000);

console.log(empleado.bonificacion());
console.log(gerente.bonificacion());
console.log(director.bonificacion());

console.log(SistemaAutenticacion.login(empleado, "12345"))