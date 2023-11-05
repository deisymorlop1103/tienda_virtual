class Login {
  constructor() {
    this.username = document.getElementById("username");
    this.password = document.getElementById("password");
    this.loginBtn = document.getElementById("login-btn");
    this.registerBtn = document.getElementById("register-btn");

    this.loginBtn.addEventListener("click", this.login);
    this.registerBtn.addEventListener("click", this.register);
  }

  login() {
    const username = this.username.value;
    const password = this.password.value;

    if (username === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const datos = new Datos();
    datos.login(username, password);
  }

  register() {
    const username = this.username.value;
    const password = this.password.value;

    if (username === "" || password === "") {
      alert("Por favor, complete todos los campos.");
      return;
    }

    const datos = new Datos();
    datos.register(username, password);
  }
}
