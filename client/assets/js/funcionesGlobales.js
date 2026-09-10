 export function setAttributes(element, attributes) {
        Object.entries(attributes).forEach(([key, value]) => {
            element.setAttribute(key, value);
        });
    }
    
export function formatearRutEnTiempoReal() {
    // Limpia el valor dejando solo números y la letra K (mayúscula o minúscula)
    let valor = document.querySelector('#inputRut').value.replace(/[^0-9kK]/g, '').toUpperCase()
    
    if (valor.length === 0) {
        document.querySelector('#inputRut').value = ''
        return
    }

    // Separa el cuerpo del dígito verificador
    let cuerpo = valor.slice(0, -1)
    let dv = valor.slice(-1)

    // Si solo hay un caracter, es el inicio del cuerpo
    if (valor.length === 1) {
        document.querySelector('#inputRut').value = dv
        return
    }

    // Agrega los puntos al cuerpo de forma dinámica de atrás hacia adelante
    let cuerpoFormateado = ''
    while (cuerpo.length > 3) {
        cuerpoFormateado = '.' + cuerpo.slice(-3) + cuerpoFormateado
        cuerpo = cuerpo.slice(0, -3)
    }
    cuerpoFormateado = cuerpo + cuerpoFormateado

    // Une el cuerpo formateado con el guion y el dígito verificador
    document.querySelector('#inputRut').value = `${cuerpoFormateado}-${dv}`
}

export function validarRutChileno(rutCompleto) {
    // Se espera el RUT limpio de puntos y guion (ej: "12345678K")
    if (rutCompleto.length < 2) return false

    const cuerpo = rutCompleto.slice(0, -1)
    let dv = rutCompleto.slice(-1).toUpperCase()

    // Calcular el Dígito Verificador teórico
    let suma = 0
    let multiplo = 2

    for (let i = cuerpo.length - 1; i >= 0; i--) {
        suma += multiplo * parseInt(cuerpo.charAt(i), 10)
        multiplo = multiplo < 7 ? multiplo + 1 : 2
    }

    const dvEsperado = 11 - (suma % 11)
    let dvCalculado = dvEsperado === 11 ? '0' : dvEsperado === 10 ? 'K' : dvEsperado.toString()

    return dv === dvCalculado
}