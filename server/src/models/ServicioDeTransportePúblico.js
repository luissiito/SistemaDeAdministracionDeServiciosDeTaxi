export default class ServicioDeTransportePublico{
    constructor(){
        this.servicios = [{nombre:'SERVICIO DE TAXI'}]
    }
    
    getServicios(){return this.servicios}

    setServicios(nuevosServicios){this.servicios = nuevosServicios}
}