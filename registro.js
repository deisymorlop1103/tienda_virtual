// Registro de usuario
document.querySelector(".registro form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector(".registro input[name='nombre']").value;
  const correo = document.querySelector(".registro input[name='correo']").value;
  const contrasena = document.querySelector(".registro input[name='contrasena']").value;

  usuarios.registrarUsuario(nombre, correo, contrasena);
});

// Inicio de sesión
document.querySelector(".login form").addEventListener("submit", (e) => {
  e.preventDefault();

  const correo = document.querySelector(".login input[name='correo']").value;
  const contrasena = document.querySelector(".login input[name='contrasena']").value;

  const inicioSesionExitosa = usuarios.credencialesCorrectas(correo, contrasena);

  if (inicioSesionExitosa) {
    // Redirigir a la página principal
    window.location.href = "index.html";
  }
});
