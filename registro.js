// Importamos la librería de JQuery
const $ = require("jquery");

// Función para registrar un nuevo usuario
function registrarUsuario() {
  // Obtenemos los datos del formulario
  const usuario = $("#usuario").val();
  const contraseña = $("#contraseña").val();

  // Creamos un nuevo objeto JSON con los datos del usuario
  const nuevoUsuario = {
    usuario,
    contraseña,
  };

  // Agregamos el nuevo usuario al arreglo de usuarios
  dataLogin.push(nuevoUsuario);

  // Guardamos los datos de los usuarios en local storage
  localStorage.setItem("dataLogin", JSON.stringify(dataLogin));

  // Redirigimos a la página de login
  window.location.href = "login.html";
}

// Eventos

// Cuando se presiona el botón de registrar, llamamos a la función registrarUsuario()
$("#registrar").on("click", registrarUsuario);