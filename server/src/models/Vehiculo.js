export default class Vehiculo{
    constructor(){
        this.anio = 0
        this.color = ''
        this.marca = ''
        this.modelo = ''
        this.numeroDeChasis = ''
        this.numeroDeMotor = ''
        this.numeroDeVin = ''   
        this.placaPatenteUnica = ''     
        this.propietario = {} // PERSONA NATURAL O PERSONA JURÍDICA (EMPRESA)
        this.tipoDeVehiculo = ''
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