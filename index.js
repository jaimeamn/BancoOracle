class cliente{
    nombreCliente;
    cedulaCliente;
}
const cliente1 = new cliente();

cliente1.nombreCliente = "Jaime";
cliente1.cedulaCliente = "1143231545";


console.log(cliente1)

class cuentaCorriente {
    numeroCuenta; 
    saldoCuenta;

    depositoEnCuenta(valor){
        this.saldoCuenta += valor;
    }

}

const cuentaCorriente1 = new cuentaCorriente();

cuentaCorriente1.numeroCuenta = "212121"
cuentaCorriente1.saldoCuenta  = 50000;   

cuentaCorriente1.depositoEnCuenta(200000)
console.log(cuentaCorriente1.saldoCuenta)