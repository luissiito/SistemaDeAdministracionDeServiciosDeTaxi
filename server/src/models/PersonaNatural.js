import Persona from "./Persona.js";

export default class PersonaNatural extends Persona{
    constructor(){
        super()
        this.correo = ''
        this.domicilio = {region:'', comuna:'', direccion:'', numero:0}
        this.numeroDeTelefono = '' // 9 DÍGITOS
        this.rut = ''
    }

    getCorreo(){return this.correo}
    getDomicilio(){return this.domicilio}
    getNumeroDeTelefono(){return this.numeroDeTelefono}
    getRut(){return this.rut}

    setCorreo(nuevoCorreo){this.correo = nuevoCorreo}
    setDomicilio(nuevoDomicilio){this.domicilio = nuevoDomicilio}
    setNumeroDeTelefono(nuevoNumeroDeTelefono){this.numeroDeTelefono = nuevoNumeroDeTelefono}   
    setRut(nuevoRut){this.rut = nuevoRut}
}