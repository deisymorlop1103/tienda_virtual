class login {
  constructor() {
    this.usuarios = [];
  }

  registrarUsuario(nombre, correo, contrasena) {
    const usuario = {
      nombre,
      correo,
      contrasena,
    };

    this.usuarios.push(usuario);

    // Convertimos los datos a JSON
    const usuariosJson = JSON.stringify(this.usuarios);

    // Almacenamos los datos en el localStorage
    localStorage.setItem("usuarios", usuariosJson);
  }

  iniciarSesion(correo, contrasena) {
    // Recorremos los usuarios registrados
    for (const usuario of this.usuarios) {
      // Si el correo y la contraseña coinciden
      if (usuario.correo === correo && usuario.contrasena === contrasena) {
        // Sesión iniciada
        console.log("Sesión iniciada");
        return true;
      }
    }

    // Sesión no iniciada
    console.log("Sesión no iniciada");
    return false;
  }
}

const login = new Login();

// Registro de usuario
document.querySelector(".registro form").addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.querySelector(".registro input[name='nombre']").value;
  const correo = document.querySelector(".registro input[name='correo']").value;
  const contrasena = document.querySelector(".registro input[name='contrasena']").value;

  login.registrarUsuario(nombre, correo, contrasena);
});

// Inicio de sesión
document.querySelector(".login form").addEventListener("submit", (e) => {
  e.preventDefault();

  const correo = document.querySelector(".login input[name='correo']").value;
  const contrasena = document.querySelector(".login input[name='contrasena']").value;

  const inicioSesionExitosa = login.iniciarSesion(correo, contrasena);

  if (inicioSesionExitosa) {
    // Redirigir a la página principal
    window.location.href = "index.html";
  }
});
