import Conductor from "./Conductor.js";

export default class LicenciaDeConducir{
    constructor(){
        this.id = ''
        this.clases = []
        this.numeroDeLicencia = ''
        this.municipalidad = ''
        this.conductor = Conductor
        this.fechaDelUltimoControl = ''
        this.fechaDeVencimiento = ''
    }

    getId(){return this.id}
    getClases(){return this.clases}
    getNumeroDeLicencia(){return this.numeroDeLicencia}
    getMunicipalidad(){return this.municipalidad}
    getConductor(){return this.conductor}
    getFechaDelUltimoControl(){return this.getFechaDelUltimoControl}
    getFechaDeVencimiento(){return this.fechaDeVencimiento}

    setId(nuevoId){this.id = nuevoId}
    setClases(nuevasClases){this.clases = nuevasClases}
    setNumeroDeLicencia(nuevoNumeroDeLicencia){this.numeroDeLicencia = nuevoNumeroDeLicencia}
    setMunicipalidad(nuevaMunicipalidad){this.municipalidad = nuevaMunicipalidad}
    setConductor(nuevoConductor){this.conductor = nuevoConductor}
    setFechaDelUltimoControl(nuevaFechaDelUltimoControl){this.fechaDelUltimoControl = nuevaFechaDelUltimoControl}
    setFechaDeVencimiento(nuevaFechaDeVencimiento){this.fechaDeVencimiento = nuevaFechaDeVencimiento}
}
