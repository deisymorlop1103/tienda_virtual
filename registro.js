// Importamos la librería de JQuery
const $ = require("jquery");

// Función para registrar los usuarios
function registrarUsuario() {
  // captura de los datos del formulario
  const usuario = $("#usuario").val();
  const contraseña = $("#contraseña").val();

  // creamos un nuevo objeto JSON con los datos del usuario nuevo
  const nuevoUsuario = {
    usuario,
    contraseña,
  };

  // se agrega el nuevo usuario al arreglo de usuarios nuevos
  dataLogin.push(nuevoUsuario);

  // se guardan los datos de los usuarios en local storage y se convierte a string
  localStorage.setItem("dataLogin", JSON.stringify(dataLogin));

  // se redirige a la página de login
  window.location.href = "login.html";
}

// se llama a la función registrarUsuario()
$("#registrar").on("click", registrarUsuario);