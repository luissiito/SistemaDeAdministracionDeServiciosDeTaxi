const NI = 'No Informado'

export default class CedulaDeIdentidad{
    constructor(){
        this.id = -1
        this.rut = NI
        this.primerNombre = NI
        this.segundoNombre = NI
        this.tercerNombre = NI
        this.primerApellido = NI
        this.segundoApellido = NI
        this.nacionalidad = NI
        this.sexo = NI
        this.numeroDeDocumento = NI
        this.fechaDeNacimiento = NI
        this.fechaDeEmision = NI
        this.fechaDeVencimiento = NI
    }

    getId(){return this.id}
    getRut(){return this.rut}
    getPrimerNombre(){return this.primerNombre}
    getSegundoNombre(){return this.segundoNombre}
    getTercerNombre(){return this.tercerNombre}
    getPrimerApellido(){return this.primerApellido}
    getSexo(){return this.sexo}
    getSegundoApellido(){return this.segundoApellido}
    getNacionalidad(){return this.nacionalidad}
    getNumeroDeDocumento(){return this.numeroDeDocumento}
    getFechaDeNacimiento(){return this.fechaDeNacimiento}
    getFechaDeEmision(){return this.fechaDeEmision}
    getFechaDeVencimiento(){return this.fechaDeVencimiento}

    setId(nuevoId){this.id = nuevoId}
    setRut(nuevoRut){this.rut = nuevoRut}
    setPrimerNombre(nuevoPrimerNombre){this.primerNombre = nuevoPrimerNombre}
    setSegundoNombre(nuevoSegundoNombre){this.segundoNombre = nuevoSegundoNombre}
    setTercerNombre(nuevoTercerNombre){this.tercerNombre = nuevoTercerNombre}
    setPrimerApellido(nuevoPrimerApellido){this.primerApellido = nuevoPrimerApellido}
    setSegundoApellido(nuevoSegundoApellido){this.segundoApellido = nuevoSegundoApellido}
    setNacionalidad(nuevaNacionalidad){this.nacionalidad = nuevaNacionalidad}
    setSexo(nuevoSexo){this.sexo = nuevoSexo}
    setNumeroDeDocumento(nuevoNumeroDeDocumento){this.numeroDeDocumento = nuevoNumeroDeDocumento}
    setFechaDeNacimiento(nuevaFechaDeNacimiento){this.fechaDeNacimiento = nuevaFechaDeNacimiento}
    setFechaDeEmision(nuevaFechaDeEmision){this.fechaDeEmision = nuevaFechaDeEmision}
    setFechaDeVencimiento(nuevaFechaDeVencimiento){this.fechaDeVencimiento = nuevaFechaDeVencimiento}
}