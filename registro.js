function login() {
  const username = document.querySelector("input[name=username]").value;
  const password = document.querySelector("input[name=password]").value;

  // Validar datos
  if (!username || !password) {
    alert("Debes ingresar un nombre de usuario y una contraseña.");
    return;
  }

  // Guardar datos en el local storage
  localStorage.setItem("username", username);
  localStorage.setItem("password", password);

  // Redireccionar a la página principal
  window.location.href = "index.html";
}

document.querySelector("form").addEventListener("submit", login);

