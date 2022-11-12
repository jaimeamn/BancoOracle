
export class Cliente{
    nombreCliente;
    cedulaCliente;
    rut;
    #clave;

    constructor(nombreCliente, cedulaCliente, rut){
        this.nombreCliente = nombreCliente;
        this.cedulaCliente = cedulaCliente;
        this.rut = rut;
        this.#clave = ""
    }

    asignarClave(clave){
        this.#clave = clave;
    }

    get clave(){
        return this.#clave;
    }
}

