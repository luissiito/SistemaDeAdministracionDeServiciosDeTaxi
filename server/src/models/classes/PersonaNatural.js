import CedulaDeIdentidad from "./CedulaDeIdentidad.js";
import Persona from "./Persona.js";

export default class PersonaNatural extends Persona{
    constructor(){
        super()
        this.cedulaDeIdentidad = CedulaDeIdentidad
        this.domicilio = {region:'', comuna:'', direccion:'', numero:0}
        this.numeroDeTelefono = '' // 9 DÍGITOS
    }
    
    getCedulaDeIdentidad(){return this.cedulaDeIdentidad}
    getCorreo(){return this.correo}
    getDomicilio(){return this.domicilio}
    getNumeroDeTelefono(){return this.numeroDeTelefono}

    setCedulaDeIdentidad(nuevaCedulaDeIdentidad){this.cedulaDeIdentidad = nuevaCedulaDeIdentidad}
    setCorreo(nuevoCorreo){this.correo = nuevoCorreo}
    setDomicilio(nuevoDomicilio){this.domicilio = nuevoDomicilio}
    setNumeroDeTelefono(nuevoNumeroDeTelefono){this.numeroDeTelefono = nuevoNumeroDeTelefono}   
}