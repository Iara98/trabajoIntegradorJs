//Formulario 1

const nombre = document.getElementById("nombre");
const apellido = document.getElementById("apellido");
const expRegular = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const botonEnviar = document.getElementById("enviar");

//nombre.value = "no";

console.log(nombre.value.length);

function validarNombre() {
    if(nombre.value.length<3){
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es correcto";
    }
}

function validarApellido() {
    if(apellido.value.length<3){
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es correcto";
    }
}


botonEnviar.addEventListener("click", validarNombre);
botonEnviar.addEventListener("click", validarApellido);


//Formulario 2


const nombreForm2 = document.getElementById("nombre");
const apellidoForm2 = document.getElementById("apellido");
const correo = document.getElementById("correo");
const expRegularForm2 = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/

const botonResumen = document.getElementById("resumen");


console.log(nombre.value.length);

function validarNombre() {
    if(nombre.value.length<3){
        document.getElementById("errorNombre").innerHTML = "El nombre no es válido";
    } else {
        document.getElementById("errorNombre").innerHTML = "El nombre es correcto";
    }
}

function validarApellido() {
    if(apellido.value.length<3){
        document.getElementById("errorApellido").innerHTML = "El apellido no es válido";
    } else {
        document.getElementById("errorApellido").innerHTML = "El apellido es correcto";
    }
}

function validarEmail() {
    if(!expRegular.test(email.value)){
        document.getElementById("errorCorreo").innerHTML = "El email no es válido"
    } else {
        document.getElementById("errorCorreo").innerHTML = "El email es correcto"
    }
}

botonResumen.addEventListener("click", validarNombre);
botonResumen.addEventListener("click", validarApellido);
botonResumen.addEventListener("click", validarEmail);