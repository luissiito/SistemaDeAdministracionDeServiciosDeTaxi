export default class ServicioDeTaxi{

    constructor(){
        this.propietario = {} // PERSONA NATURAL, PERSONA JURÍDICA (EMPRESA), ORGANIZACIÓN SINDICAL
        this.nombre = ''
        this.region = ''
        this.tipoDeServicio = ''
        this.correoElectronico = ''
        this.responsableDelServicio = {} // PERSONA NATURAL
        this.flotaVehicular = [] //VEHÍCULOS
    }
}