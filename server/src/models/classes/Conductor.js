import FotoDeConductor from "./FotoDeConductor.js"
import LicenciaDeConducir from './LicenciaDeConducir.js'
import PersonaNatural from "./PersonaNatural.js"

export default class Conductor extends PersonaNatural{
    constructor(){
        super()
        this.licenciaDeConducir = LicenciaDeConducir
        this.fotoDeConductor = FotoDeConductor
        this.hojaDeVidaDelConductor = '' // HOJA DE VIDA DEL CONDUCTOR.pdf
    }
}