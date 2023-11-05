class Datos {
  constructor() {
    this.usuarios = JSON.parse(localStorage.getItem("usuarios"));
  }

  login(username, password) {
    if (this.usuarios.find(usuario => usuario.username === username && usuario.password === password)) {
      localStorage.setItem("usuario", username);
      window.location.href = "index.html";
    } else {
      alert("El nombre de usuario o la contraseña son incorrectos.");
    }
  }

  register(username, password) {
    this.usuarios.push({
      username,
      password
    });

    localStorage.setItem("usuarios", JSON.stringify(this.register));
//localStorage.setItem("usuarios", JSON.stringify(this.usuarios, null, 2));
