import Vehiculo from "./Vehiculo.js"
import Conductor from "./Conductor.js"

export default class TaxiColectivo extends Vehiculo{
    constructor(){
        this.rutaPdfCartolaDeRecorrido = '' // CARTOLA PPU .pdf
        this.conductor = Conductor
    }

    getRutaPdfCartolaDeRecorrido(){return this.rutaPdfCartolaDeRecorrido}
    getConductor(){return this.conductor}

    setRutaPdfCartolaDeRecorrido(nuevaRutaPdfCartolaDeRecorrido){this.rutaPdfCartolaDeRecorrido = nuevaRutaPdfCartolaDeRecorrido}
    setConductor(nuevoConductor){this.conductor = nuevoConductor}
}