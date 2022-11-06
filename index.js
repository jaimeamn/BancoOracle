import {cuentaCorriente} from "./cuentaCorriente.js"



const cuantaJaime = new cuentaCorriente();

let saldo =  cuantaJaime.verSaldo();
console.log("El saldo de la cuenta es " + saldo);
saldo = cuantaJaime.depositoEnCuenta(200);
console.log("El saldo de la cuenta es " + saldo);
saldo = cuantaJaime.retirarEnCuenta(50)
console.log("El saldo de la cuenta es " + saldo);