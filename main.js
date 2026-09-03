
import SistemaDeAdministracionLinea120 from "./server/src/models/classes/SistemaDeAdministracionLinea120.js";
import FormularioHTMLDeCedulaDeIdentidad from "./client/views/js/clases/FormularioHTMLDeCedulaDeIdentidad.js";
export const menuPrincipal = document.createElement('main')
const formularioHTMLDeCedulaDeIdentidad = new FormularioHTMLDeCedulaDeIdentidad()
const sistemaDeAdministracionLinea120 = new SistemaDeAdministracionLinea120()

document.querySelector('body').appendChild(menuPrincipal)
menuPrincipal.appendChild(formularioHTMLDeCedulaDeIdentidad.getForm())

sistemaDeAdministracionLinea120.iniciar()