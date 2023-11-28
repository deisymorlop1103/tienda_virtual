// Clase para almacenar los usuarios registrados
class Usuarios {
  constructor() {
    this.usuarios = [];
  }

  // Añade un nuevo usuario a la lista
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
  
  // Comprueba si el usuario existe
  existeUsuario(correo) {
    return this.usuarios.some((usuario) => usuario.correo === correo);
  }

  // Comprueba si las credenciales son correctas
  credencialesCorrectas(correo, contrasena) {
    return this.existeUsuario(correo) && this.usuarios.find((usuario) => usuario.correo === correo).contrasena === contrasena;
  }
}

// Instancia de la clase Usuarios
const usuarios = new Usuarios();

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
    // Redirigir a la página home
    window.location.href = "/";
  }
});








registrarUsuario();
 // Se recuperan los datos en el localStorage
    localStorage.getItem("usuarios", usuariosJson);

  const inicioSesion = usuarios.credencialesCorrectas(nombre, contrasena);
 if (inicioSesion) {
    // Redirigir a la página home
    window.location.href = "/";
   
   alert(!!Hola + nombre);
  }
