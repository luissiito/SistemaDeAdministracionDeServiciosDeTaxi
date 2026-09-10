import FormularioHTMLDeCedulaDeIdentidad from "../../../../client/views/js/clases/FormularioHTMLDeCedulaDeIdentidad.js";

export default class SistemaDeAdministracionLinea120{
    constructor(){}

    iniciar(){    
        const formularioHTMLDeCedulaDeIdentidad = new FormularioHTMLDeCedulaDeIdentidad()
        document.querySelector('main').appendChild(formularioHTMLDeCedulaDeIdentidad.getForm())   
    }
}