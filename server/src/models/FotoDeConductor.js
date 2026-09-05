import Conductor from "./Conductor.js"

export default class FotoDeConductor{
    constructor(){
        this.urlImagen = ''
        this.nombreCompletoDelConductor = ''
        this.rutConductor = ''
    }

    getUrlImagen(){return this.urlImagen}
    getNombreCompletoDelConductor(){return this.nombreCompletoDelConductor}
    getRutConductor(){return this.rutConductor}

    setUrlImagen(nuevaUrlImagen){this.urlImagen = nuevaUrlImagen}
    setNombreCompletoDelConductor(Conductor){
        this.nombreCompletoDelConductor =
         `${Conductor.getPrimerNombre()} ${Conductor.getSegundoNombre()} ${Conductor.getTercerNombre()} ${Conductor.getApellidoMaterno()} ${Conductor.getApellidoPaterno()}`
     }
     setRutConductor(Conductor){this.rutConductor = Conductor.getRut()}
}