function registrarUsuario() {
  // Obtenemos los datos del formulario
  const nombre = document.querySelector("input[name='nombre']").value;
  const correo = document.querySelector("input[name='correo']").value;
  const contraseña = document.querySelector("input[name='contraseña']").value;

  // Convertimos los datos a JSON
  const usuario = {
    nombre,
    correo,
    contraseña,
  };
  // Almacenamos los datos en el local storage
  localStorage.setItem("usuario", JSON.stringify(usuario));

  // Redirigimos a la página principal
  window.location.href = "index.html";
}

// Evento del botón de envío
document.querySelector("input[type='submit']").addEventListener("click", registrarUsuario);
