function encriptarTexto() {
    const texto = document.getElementById('texto').value;
    const desplzamiento = 3;
    if (!texto) {
        alert('Por favor, ingresa un texto para encriptar.');
        return;
    }
    let textoSalida = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        // Sólo aplica el cifrado a letras
        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            textoSalida += String.fromCharCode(((charCode - 65 + desplzamiento) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            textoSalida += String.fromCharCode(((charCode - 97 + desplzamiento) % 26) + 97);
        } else {
            textoSalida += inputText[i]; // Otros caracteres no se modifican
        }
    }

    document.getElementById('textoSalida').value = textoSalida;
}

function desencriptarTexto() {
    const texto = document.getElementById('texto').value;
    const desplzamiento = 3;
    if (!texto) {
        alert('Por favor, ingresa un texto para desencriptar.');
        return;
    }
    let textoSalida = '';

    for (let i = 0; i < texto.length; i++) {
        let charCode = texto.charCodeAt(i);

        // Sólo aplica el descifrado a letras
        if (charCode >= 65 && charCode <= 90) { // Mayúsculas
            textoSalida += String.fromCharCode(((charCode - 65 - desplzamiento + 26) % 26) + 65);
        } else if (charCode >= 97 && charCode <= 122) { // Minúsculas
            textoSalida += String.fromCharCode(((charCode - 97 - desplzamiento + 26) % 26) + 97);
        } else {
            textoSalida += texto[i]; // Otros caracteres no se modifican
        }
    }

    document.getElementById('textoSalida').value = textoSalida;

function copiarTexto(){

};

}
