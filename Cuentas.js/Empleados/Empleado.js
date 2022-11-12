export class Empleado{
    #nombre;
    #cedula;
    #salario;
    #clave;
    constructor(nombre, cedula, salario){
        this.#nombre = nombre;
        this.#cedula = cedula;
        this.#salario = salario;
        this.#clave = "";
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    autenticable(clave){
        return clave == this.#clave;
    }
    
    bonificacion(){
     return this.#salario;
    }

    _bonificacion(bono){
        return this.#salario + this.#salario*bono/100;
    }

}