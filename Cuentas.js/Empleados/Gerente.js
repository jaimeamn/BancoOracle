import { Empleado } from "./Empleado.js";

export class Gerente extends Empleado{
    constructor(nombre, cedula, salario){
        super(nombre, cedula, salario)
    }
    bonificacion(){
        const bono = 5;
        return super._bonificacion(bono);
    }
}