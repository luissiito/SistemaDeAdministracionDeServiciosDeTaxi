import FotoDeConductor from "./FotoDeConductor.js"
import PersonaNatural from "./PersonaNatural.js"

export default class Conductor extends PersonaNatural{
    constructor(){
        super()
        this.licenciaDeConducir = {}
        this.fotoDeConductor = FotoDeConductor
    }
}