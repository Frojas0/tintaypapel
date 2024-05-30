const nombre = document.getElementById('nombre')
const correo = document.getElementById('correo')
const form_contacto = document.getElementById('form_contacto')

function validarNombre() {
    //
    if (nombre.value === "" || nombre.value === null){
        alert("El nombre no puede estar vacío");
        return false;
    }
    return true;
}

function validarCorreo() {
    //
    if (correo.value === "" || correo.value === null){
        alert("El correo no puede estar vacío");
        return false;
    }
    const _valido = (correo) => {
        return String(correo)
            .toLowerCase()
            .match(/^\S+@\S+\.\S+$/);
        
    };
    if (!_valido(correo.value)) {
        alert("Revise el correo, debe ser ejemplo@server.org");
        return false;
    }
    return true;
}

function validarFormulario(){
    if (!validarCorreo()) return false;
    if (!validarNombre()) return false;
    return true;
}

form_contacto.addEventListener('submit', (e)=>{
    if(validarFormulario()) {
        console.log("Campos validos -enviando");
    } else {
        e.preventDefault();
    }
})