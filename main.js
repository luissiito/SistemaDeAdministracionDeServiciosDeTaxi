
import Conductor from "./server/src/models/Conductor.js";

const conductor = new Conductor()

conductor.setPrimerNombre('Luis')
conductor.setSegundoNombre('Fernando')
conductor.setApellidoMaterno('González')
conductor.setApellidoPaterno('Olmedo')
conductor.setNombreCompleto()

console.log(conductor.getNombreCompleto())
console.log(conductor.fotoDeConductor)