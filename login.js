// Importamos la librería de JQuery
const $ = require("jquery");

// Creamos un arreglo de objetos JSON para almacenar los datos de los usuarios
let dataLogin = [];

// Función para iniciar sesión
function iniciarSesion() {
  // Obtenemos los datos del formulario
  const usuario = $("#usuario").val();
  const contraseña = $("#contraseña").val();

  // Recorremos el arreglo de usuarios para encontrar una coincidencia
  for (let i = 0; i < dataLogin.length; i++) {
    // Si encontramos una coincidencia, iniciamos sesión
    if (dataLogin[i].usuario === usuario && dataLogin[i].contraseña === contraseña) {
      // Guardamos el nombre de usuario en local storage
      localStorage.setItem("usuario", usuario);

      // Redirigimos a la página principal
      window.location.href = "principal.html";
      return;
    }
  }

  // Si no encontramos una coincidencia, mostramos un mensaje de error
  alert("Usuario o contraseña incorrectos");
}

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

// Cuando se presiona el botón de iniciar sesión, llamamos a la función iniciarSesion()
$("#login").on("click", iniciarSesion);

// Cuando se presiona el botón de registrar, llamamos a la función registrarUsuario()
$("#registrar").on("click", registrarUsuario);

// Al cargar la página, verificamos si hay un usuario registrado en local storage
if (localStorage.getItem("dataLogin")) {
  // Si hay un usuario registrado, iniciamos sesión
  const datosLogin = JSON.parse(localStorage.getItem("dataLogin"));
  iniciarSesion(datosLogin[0].usuario, datosLogin[0].contraseña);
}
