export default class Persona{
    constructor(){
        this.primerNombre = ''
        this.segundoNombre = ''
        this.tercerNombre = ''
        this.apellidoPaterno = ''
        this.apellidoMaterno = '' 
        this.nombreCompleto = ''
    }

    getPrimerNombre(){return this.primerNombre}
    getSegundoNombre(){return this.segundoNombre}
    getTercerNombre(){return this.tercerNombre}
    getApellidoMaterno(){return this.apellidoMaterno}
    getApellidoPaterno(){return this.apellidoPaterno}
    getNombreCompleto(){return this.nombreCompleto}

    setPrimerNombre(nuevoPrimerNombre){this.primerNombre = nuevoPrimerNombre}
    setSegundoNombre(nuevoSegundoNombre){this.segundoNombre = nuevoSegundoNombre}
    setTercerNombre(nuevoTercerNombre){this.tercerNombre = nuevoTercerNombre}
    setApellidoMaterno(nuevoApellidoMaterno){this.apellidoMaterno = nuevoApellidoMaterno}
    setApellidoPaterno(nuevoApellidoPaterno){this.apellidoPaterno = nuevoApellidoPaterno} 
    setNombreCompleto(){
        this.nombreCompleto = `${this.primerNombre} ${this.segundoNombre} ${this.tercerNombre} ${this.apellidoMaterno} ${this.apellidoPaterno}`
    }
}