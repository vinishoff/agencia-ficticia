const menuBarMobile = document.getElementById("menuBar");
menuBarMobile.addEventListener("click", () => {
  const divMenuBar    = document.getElementById("divMenuBar");
  const currentClass  = divMenuBar.className;
  const newClass      = currentClass === "divMenuBarNone"?"divMenuBarActive":"divMenuBarNone";

  divMenuBar.classList.add(newClass);
  divMenuBar.classList.remove(currentClass);
})

const elementForm = document.getElementById("formContato");
elementForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const nome  = document.getElementById("nome").value;
  const email = document.getElementById("email").value;
  const texto = document.getElementById("textarea").value;

  if (!nome.trim() || !texto.trim()){
    alert("Favor informar seu nome e o seu projeto.")
  }

  // Processo....
})