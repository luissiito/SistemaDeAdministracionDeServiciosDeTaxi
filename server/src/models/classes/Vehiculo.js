const NI = 'No Informado'

export default class Vehiculo{
    constructor(){
        this.anio = NI
        this.color = NI
        this.marca = NI
        this.modelo = NI
        this.numeroDeChasis = NI
        this.numeroDeMotor = NI
        this.numeroDeVin = NI   
        this.placaPatenteUnica = NI     
        this.propietario = {} // PERSONA NATURAL O PERSONA JURÍDICA (EMPRESA)
        this.tipoDeVehiculo = NI
    }
    getAnio(){return this.anio}
    getColor(){return this.color}
    getMarca(){return this.marca}
    getModelo(){return this.modelo}
    getNumeroDeChasis(){return this.numeroDeChasis}
    getNumeroDeMotor(){return this.numeroDeMotor}
    getNumeroDeVin(){return this.numeroDeVin}
    getPlacaPatenteUnica(){return this.placaPatenteUnica}
    getPropietario(){return this.propietario}
    getTipoDeVehiculo(){return this.tipoDeVehiculo}

    setAnio(nuevoAnio){this.anio = nuevoAnio}
    setColor(nuevoColor){this.color = nuevoColor}
    setMarca(nuevaMarca){this.marca = nuevaMarca}
    setModelo(nuevoModelo){this.modelo = nuevoModelo}
    setNumeroDeChasis(nuevoNumeroDeChasis){this.numeroDeChasis = nuevoNumeroDeChasis}
    setNumeroDeMotor(nuevoNumeroDeMotor){this.numeroDeMotor = nuevoNumeroDeMotor}
    setNumeroDeVin(nuevoNumeroDeVin){this.numeroDeVin = nuevoNumeroDeVin}
    setPlacaPatenteUnica(nuevaPlacaPatenteUnica){this.placaPatenteUnica = nuevaPlacaPatenteUnica}
    setPropietario(nuevoPropietario){this.propietario = nuevoPropietario}
    setTipoDeVehiculo(nuevoTipoDeVehiculo){this.tipoDeVehiculo = nuevoTipoDeVehiculo}
}