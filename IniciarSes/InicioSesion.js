const btn = document.querySelector(".btn-login");

btn.addEventListener("click", function() {
  const email = document.getElementById("email").value;
  const pass = document.getElementById("password").value;

  if (email === "" || pass === "") {
    alert("Por favor completa todos los campos.");
  } else {
    alert("¡Inicio de sesión simulado!");
  }
});
