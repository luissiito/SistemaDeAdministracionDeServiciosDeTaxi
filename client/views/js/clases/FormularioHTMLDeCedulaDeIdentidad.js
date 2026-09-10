import { getVistaHTMLDeCedulaDeIdentidad } from '../vistaHTMLDeCedulaDeIdentidad.js'
import CedulaDeIdentidad from '../../../../server/src/models/classes/CedulaDeIdentidad.js'

export default class FormularioHTMLDeCedulaDeIdentidad {
    constructor() {
        this.cedulaDeIdentidad = CedulaDeIdentidad
        this.form = document.createElement('form')
        this.divFormGrid = document.createElement('div')
        this.divPrimerNombre = document.createElement('div')
        this.labelPrimerNombre = document.createElement('label')
        this.inputPrimerNombre = document.createElement('input')
        this.divSegundoNombre = document.createElement('div')
        this.labelSegundoNombre = document.createElement('label')
        this.inputSegundoNombre = document.createElement('input')
        this.divPrimerApellido = document.createElement('div')
        this.labelPrimerApellido = document.createElement('label')
        this.inputPrimerApellido = document.createElement('input')
        this.divSegundoApellido = document.createElement('div')
        this.labelSegundoApellido = document.createElement('label')
        this.inputSegundoApellido = document.createElement('input')
        this.divRut = document.createElement('div')
        this.labelRut = document.createElement('label')
        this.inputRut = document.createElement('input')
        this.divNumeroDeDocumento = document.createElement('div')
        this.labelNumeroDeDocumento = document.createElement('label')
        this.inputNumeroDeDocumento = document.createElement('input')
        this.divNacionalidad = document.createElement('div')
        this.labelNacionalidad = document.createElement('label')
        this.inputNacionalidad = document.createElement('input')
        this.divSexo = document.createElement('div')
        this.labelSexo = document.createElement('label')
        this.selectSexo = document.createElement('select')
        this.divFechaDeNacimiento = document.createElement('div')
        this.labelFechaDeNacimiento = document.createElement('label')
        this.inputFechaDeNacimiento = document.createElement('input')
        this.divFechaDeEmision = document.createElement('div')
        this.labelFechaDeEmision = document.createElement('label')
        this.inputFechaDeEmision = document.createElement('input')
        this.divFechaDeVencimiento = document.createElement('div')
        this.labelFechaDeVencimiento = document.createElement('label')
        this.inputFechaDeVencimiento = document.createElement('input')
        this.divBotonEnviar = document.createElement('label')
        this.botonEnviar = document.createElement('button')
        this.crearFormulario()
    }

    getForm() { return this.form }

    appendAllElements() {
        this.divPrimerNombre.append(this.labelPrimerNombre, this.inputPrimerNombre)
        this.divSegundoNombre.append(this.labelSegundoNombre, this.inputSegundoNombre)
        this.divPrimerApellido.append(this.labelPrimerApellido, this.inputPrimerApellido)
        this.divSegundoApellido.append(this.labelSegundoApellido, this.inputSegundoApellido)
        this.divRut.append(this.labelRut, this.inputRut)
        this.divNumeroDeDocumento.append(this.labelNumeroDeDocumento, this.inputNumeroDeDocumento)
        this.divNacionalidad.append(this.labelNacionalidad, this.inputNacionalidad)
        this.divSexo.append(this.labelSexo, this.selectSexo)
        this.divFechaDeNacimiento.append(this.labelFechaDeNacimiento, this.inputFechaDeNacimiento)
        this.divFechaDeEmision.append(this.labelFechaDeEmision, this.inputFechaDeEmision)
        this.divFechaDeVencimiento.append(this.labelFechaDeVencimiento, this.inputFechaDeVencimiento)
        this.divBotonEnviar.append(this.botonEnviar)
        this.divFormGrid.append(this.divPrimerNombre, this.divSegundoNombre, this.divPrimerApellido, this.divSegundoApellido,
            this.divRut, this.divNumeroDeDocumento, this.divNacionalidad, this.divSexo, this.divFechaDeNacimiento,
            this.divFechaDeEmision, this.divFechaDeVencimiento, this.divBotonEnviar
        )
        this.form.appendChild(this.divFormGrid)
    }

    añadirEventoClickAlBotonEnviar() {
        this.botonEnviar.addEventListener('click', (e) => {
            e.preventDefault()
            this.cedulaDeIdentidad = new CedulaDeIdentidad()
            this.cedulaDeIdentidad.primerNombre = this.inputPrimerNombre.value
            this.cedulaDeIdentidad.segundoNombre = this.inputSegundoNombre.value
            this.cedulaDeIdentidad.primerApellido = this.inputPrimerApellido.value
            this.cedulaDeIdentidad.segundoApellido = this.inputSegundoApellido.value
            this.cedulaDeIdentidad.rut = this.inputRut.value
            this.cedulaDeIdentidad.nacionalidad = this.inputNacionalidad.value
            this.cedulaDeIdentidad.sexo = this.selectSexo.value
            this.cedulaDeIdentidad.numeroDeDocumento = this.inputNumeroDeDocumento.value
            this.cedulaDeIdentidad.fechaDeNacimiento = this.inputFechaDeNacimiento.value
            this.cedulaDeIdentidad.fechaDeEmision = this.inputFechaDeEmision.value
            this.cedulaDeIdentidad.fechaDeVencimiento = this.inputFechaDeVencimiento.value
            this.form.remove()
            if (!this.validarSiTodosLosCamposEstanLlenos()) {
                window.location.reload();
            } else {
                document.querySelector('main').innerHTML = getVistaHTMLDeCedulaDeIdentidad()
                this.setInformacionALaVistaDeCedulaDeIdentidad()
            }
        })
    }

    añadirEventoBlurAlInputRut() {
        this.inputRut.addEventListener('blur', () => {
        })
    }

    añadirEventoChangeAlInputFechaDeNacimiento() {
        this.inputFechaDeNacimiento.addEventListener('change', () => {
            const isoValue = this.inputFechaDeNacimiento.value; // Get the value in ISO format (YYYY-MM-DD)
            if (!isoValue) return;

            const [year, month, day] = isoValue.split('-');
            const formattedDate = `${day} FEB ${year}`; // Reordered to DD-MM-YYYY
            this.inputFechaDeNacimiento.textContent = formattedDate;
            console.log(formattedDate); // Output the formatted date to the console
        });
    }
    añadirEventoChangeAlInputFechaDeNacimiento() {
        this.inputFechaDeNacimiento.addEventListener('change', () => {
            const isoValue = this.inputFechaDeNacimiento.value; // Get the value in ISO format (YYYY-MM-DD)
            if (!isoValue) return;

            const [year, month, day] = isoValue.split('-');
            const formattedDate = `${day} FEB ${year}`; // Reordered to DD-MM-YYYY
            this.inputFechaDeNacimiento.textContent = formattedDate;
        });
    }

    crearFormulario() {
        this.appendAllElements()
        this.prepararDivFormGrid()
        this.prepararForm()
        this.prepararFormGroupPrimerNombre()
        this.prepararFormGroupSegundoNombre()
        this.prepararFormGroupPrimerApellido()
        this.prepararFormGroupSegundoApellido()
        this.prepararFormGroupRut()
        this.prepararFormGroupNumeroDeDocumento()
        this.prepararFormGroupNacionalidad()
        this.prepararFormGroupSexo()
        this.prepararFormGroupFechaDeNacimiento()
        this.prepararFormGroupFechaDeEmision()
        this.prepararFormGroupFechaDeVencimiento()
        this.prepararFormGroupBotonEnviar()
    }

    mostrarElRutConGuion() {
        const rut = this.inputRut.value
        const array = rut.split('')
        const rutConGuion = `${array.slice(0, -1).join('')}-${array.slice(-1)}`
        this.inputRut.value = rutConGuion
    }

    prepararForm() {
        this.form.setAttribute('class', 'FormularioHTMLDeCedulaDeIdentidad')
    }
    prepararDivFormGrid() {
        this.divFormGrid.setAttribute('class', 'form-grid')
    }

    prepararFormGroupPrimerNombre() {
        const atributos = { id: 'inputPrimerNombre', type: 'text', required: '' }
        this.divPrimerNombre.setAttribute('class', 'form-group')
        this.labelPrimerNombre.setAttribute('for', 'inputPrimerNombre')
        this.labelPrimerNombre.textContent = 'Primer Nombre'
        this.setAttributes(this.inputPrimerNombre, atributos)
    }
    prepararFormGroupSegundoNombre() {
        const atributos = { id: 'inputSegundoNombre', type: 'text', required: '' }
        this.divSegundoNombre.setAttribute('class', 'form-group')
        this.labelSegundoNombre.setAttribute('for', 'inputSegundoNombre')
        this.labelSegundoNombre.textContent = 'Segundo Nombre'
        this.setAttributes(this.inputSegundoNombre, atributos)
    }
    prepararFormGroupPrimerApellido() {
        const atributos = { id: 'inputPrimerApellido', type: 'text', required: '' }
        this.divPrimerApellido.setAttribute('class', 'form-group')
        this.labelPrimerApellido.setAttribute('for', 'inputPrimerApellido')
        this.labelPrimerApellido.textContent = 'Primer Apellido'
        this.setAttributes(this.inputPrimerApellido, atributos)
    }
    prepararFormGroupSegundoApellido() {
        const atributosInputPrimerApellido = { id: 'inputSegundoApellido', type: 'text', required: '' }
        this.divSegundoApellido.setAttribute('class', 'form-group')
        this.labelSegundoApellido.setAttribute('for', 'inputSegundoApellido')
        this.labelSegundoApellido.textContent = 'Segundo Apellido'
        this.setAttributes(this.inputSegundoApellido, atributosInputPrimerApellido)
    }
    prepararFormGroupRut() {
        const atributosInputRut = { id: 'inputRut', type: 'number', required: '' }
        this.divRut.setAttribute('class', 'form-group')
        this.labelRut.setAttribute('for', 'inputRut')
        this.labelRut.textContent = 'Rut'
        this.setAttributes(this.inputRut, atributosInputRut)
        this.añadirEventoBlurAlInputRut()
    }
    prepararFormGroupNumeroDeDocumento() {
        const atributosInputNumeroDeDocumento = { id: 'inputNumeroDeDocumento', type: 'text', required: '' }
        this.divNumeroDeDocumento.setAttribute('class', 'form-group')
        this.labelNumeroDeDocumento.setAttribute('for', 'inputNumeroDeDocumento')
        this.labelNumeroDeDocumento.textContent = 'Número de Documento'
        this.setAttributes(this.inputNumeroDeDocumento, atributosInputNumeroDeDocumento)
    }
    prepararFormGroupNacionalidad() {
        const atributosInputNacionalidad = { id: 'inputNacionalidad', type: 'text', disabled: '' }
        this.divNacionalidad.setAttribute('class', 'form-group')
        this.labelNacionalidad.setAttribute('for', 'inputNacionalidad')
        this.labelNacionalidad.textContent = 'Nacionalidad'
        this.inputNacionalidad.value = 'CHILENA'
        this.setAttributes(this.inputNacionalidad, atributosInputNacionalidad)
    }
    prepararFormGroupSexo() {
        const atributosSelectSexo = { id: 'selectSexo', required: '' }
        this.divSexo.setAttribute('class', 'form-group')
        this.labelSexo.setAttribute('for', 'SelectSexo')
        this.labelSexo.textContent = 'Sexo'
        this.setAttributes(this.selectSexo, atributosSelectSexo)
        this.fillSelectSexo()
    }
    prepararFormGroupFechaDeNacimiento() {
        const atributosInputFechaDeNacimiento = { id: 'inputFechaDeNacimiento', type: 'text', readonly: true }
        this.divFechaDeNacimiento.setAttribute('class', 'form-group')
        this.labelFechaDeNacimiento.setAttribute('for', 'inputFechaDeNacimiento')
        this.labelFechaDeNacimiento.textContent = 'Fecha de Nacimiento'
        this.setAttributes(this.inputFechaDeNacimiento, atributosInputFechaDeNacimiento)
        this.añadirEventoChangeAlInputFechaDeNacimiento()
    }
    prepararFormGroupFechaDeEmision() {
        const atributosInputFechaDeEmision = { id: 'inputFechaDeEmision', type: 'text', readonly: true }
        this.divFechaDeEmision.setAttribute('class', 'form-group')
        this.labelFechaDeEmision.setAttribute('for', 'inputFechaDeEmision')
        this.labelFechaDeEmision.textContent = 'Fecha de Emisión'
        this.setAttributes(this.inputFechaDeEmision, atributosInputFechaDeEmision)
    }
    prepararFormGroupFechaDeVencimiento() {
        const atributosInputFechaDeVencimiento = { id: 'inputFechaDeVencimiento', type: 'text', readonly: true }
        this.divFechaDeVencimiento.setAttribute('class', 'form-group')
        this.labelFechaDeVencimiento.setAttribute('for', 'inputFechaDeVencimiento')
        this.labelFechaDeVencimiento.textContent = 'Fecha de Vencimiento'
        this.setAttributes(this.inputFechaDeVencimiento, atributosInputFechaDeVencimiento)
    }
    prepararFormGroupBotonEnviar() {
        this.divBotonEnviar.setAttribute('class', 'form-group')
        this.botonEnviar.setAttribute('class', 'BotonEnviar')
        this.botonEnviar.textContent = 'ENVIAR'
        this.botonEnviar.disabled = false
        this.añadirEventoClickAlBotonEnviar()
    }

    fillSelectSexo() {
        const options = [
            { value: 'M', text: 'Masculino' },
            { value: 'F', text: 'Femenino' },
        ]

        options.forEach(opt => {
            const option = document.createElement('option')
            option.value = opt.value
            option.text = opt.text
            this.selectSexo.appendChild(option)
        })
    }

    setAttributes(element, attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }

    setInformacionALaVistaDeCedulaDeIdentidad() {
        document.querySelector('#cardNombres').textContent = `${this.cedulaDeIdentidad.primerNombre} ${this.cedulaDeIdentidad.segundoNombre}`
        document.querySelector('#cardApellidos').textContent = `${this.cedulaDeIdentidad.primerApellido} ${this.cedulaDeIdentidad.segundoApellido}`
        document.querySelector('#cardNacionalidad').textContent = `${this.cedulaDeIdentidad.nacionalidad}`
        document.querySelector('#cardSexo').textContent = `${this.cedulaDeIdentidad.sexo}`
        document.querySelector('#cardNumeroDeDocumento').textContent = `${this.cedulaDeIdentidad.numeroDeDocumento}`
        document.querySelector('#cardNacimiento').textContent = `${this.cedulaDeIdentidad.fechaDeNacimiento}`
        document.querySelector('#cardEmision').textContent = `${this.cedulaDeIdentidad.fechaDeEmision}`
        document.querySelector('#cardVencimiento').textContent = `${this.cedulaDeIdentidad.fechaDeVencimiento}`
        document.querySelector('#cardRut').textContent = `${this.cedulaDeIdentidad.rut}`
    }

    validarSiTodosLosCamposEstanLlenos() {
        const campos = [
            this.inputPrimerNombre,
            this.inputSegundoNombre,
            this.inputPrimerApellido,
            this.inputSegundoApellido,
            this.inputRut,
            this.inputNumeroDeDocumento,
            this.inputFechaDeNacimiento,
            this.inputFechaDeEmision,
            this.inputFechaDeVencimiento
        ]
        return campos.every(campo => campo.value.trim() !== '')
    }
}