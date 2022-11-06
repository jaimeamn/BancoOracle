import {Cliente} from "./cliente.js";
import {CuentaCorriente} from "./cuentaCorriente.js";


const cliente  = new Cliente("Jaime", "12547655", "2121414");
const cliente2 = new Cliente("Yessica",  "12545555", "54785");
console.log(cliente);
console.log(cliente2);


const cuantaJaime = new CuentaCorriente(cliente, "2354", "001");
console.log(cuantaJaime);



const cuantaYessica = new CuentaCorriente(cliente2, "02", "002" );
console.log(cuantaYessica);

cuantaJaime.depositoEnCuenta(500);
const saldo =  cuantaJaime.verSaldo();
console.log("El saldo de la cuenta de Jaime es " + saldo);
cuantaJaime.transferirParaCuenta(100, cuantaYessica);
const saldoYessica = cuantaYessica.verSaldo();
console.log("El saldo de la cuenta de yessica es " + saldoYessica);
const saldoJaime =  cuantaJaime.verSaldo();
console.log("El saldo de la cuenta de Jaime es " + saldoJaime);


const nCuentas = CuentaCorriente.cantidadCuentas;
console.log(nCuentas);