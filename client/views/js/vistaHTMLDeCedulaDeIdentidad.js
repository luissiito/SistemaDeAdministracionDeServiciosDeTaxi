
export const getVistaHTMLDeCedulaDeIdentidad = (cedulaDeIdentidad) => {
    const vistaHTMLDeCelulaDeIdentidad = `
  

    <!-- VISTA DE LA CREDENCIAL -->
    <div class="cardCedulaDeIdentidad">
        <div class="header">
            <div class="header-left">
                <h1>REPÚBLICA DE CHILE</h1>
                <h2>SERVICIO DE REGISTRO CIVIL E IDENTIFICACIÓN</h2>
            </div>
            <div class="header-right">
                CEDULA DE IDENTIDAD
            </div>
        </div>
    
        <div class="main-content">
            <!-- Foto -->
            <div class="photo-container" id="photoContainer">
                <div class="photoPersonWrapper" >
                  <img id="cardPhoto" src="./assets/images/noImageAvailable.png" alt="Foto" style="display: true;">
                  <div class="cardRut">Rut: ${cedulaDeIdentidad.rut}</div> 
                </div>
            </div>               
    
            <!-- Datos -->
            <div class="info-container">
                <div class="info-group full-width">
                    <span class="label">APELLIDOS</span>
                    <span class="value" id="cardApellidos">${cedulaDeIdentidad.primerApellido}
                        ${cedulaDeIdentidad.segundoApellido}</span>
                </div>
                <div class="info-group full-width">
                    <span class="label">NOMBRES</span>
                    <span class="value" id="cardNombres">${cedulaDeIdentidad.primerNombre}
                        ${cedulaDeIdentidad.segundoNombre}</span>
                </div>
                <div class="info-group">
                    <span class="label">NACIONALIDAD</span>
                    <span class="value" id="cardNacionalidad">${cedulaDeIdentidad.nacionalidad}</span>
                </div>
                <div class="info-group">
                    <span class="label">SEXO</span>
                    <span class="value" id="cardSexo">${cedulaDeIdentidad.sexo}</span>
                </div>
                <div class="info-group">
                    <span class="label">FECHA DE NACIMIENTO</span>
                    <span class="value" id="cardNacimiento">${cedulaDeIdentidad.fechaDeNacimiento}</span>
                </div>
                <div class="info-group">
                    <span class="label">NÚMERO DOCUMENTO</span>
                    <span class="value-numeroDeDocumento" id="cardNumeroDeDocumento">${cedulaDeIdentidad.getNumeroDeDocumento()}</span>
                </div>
                <div class="info-group">
                    <span class="label">FECHA DE EMISIÓN</span>
                    <span class="value" id="cardEmision">${cedulaDeIdentidad.fechaDeEmision}</span>
                </div>
                <div class="info-group">
                    <span class="label">FECHA DE VENCIMIENTO</span>
                    <span class="value" id="cardVencimiento">${cedulaDeIdentidad.fechaDeVencimiento}</span>
                </div>
            </div>
        </div>
    
        <div class="footer-content">
            <div class="signature-section">
                <div class="signature-line">FIRMA DEL TITULAR</div>
            </div>
            <div class="document-number" id="cardDocNum">${cedulaDeIdentidad.id}</div>
        </div>
    </div>          
            `

    return vistaHTMLDeCelulaDeIdentidad

}

