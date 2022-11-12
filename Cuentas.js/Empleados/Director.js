import { Empleado } from "./Empleado.js";

export class Director extends Empleado{
    constructor(nombre, cedula, salario){
        super(nombre, cedula, salario)
    }

    bonificacion(){
        const bono = 10;
        return super._bonificacion(bono)
    }
}