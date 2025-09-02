const navBar = document.getElementById("nav__bar");
navBar.addEventListener("click", () => {
  const barDisplay    = document.getElementById("bar__display");
  const currentClass  = barDisplay.className;
  const newClass      = currentClass === "bar__display--none"?"bar__display":"bar__display--none";

  barDisplay.classList.add(newClass);
  barDisplay.classList.remove(currentClass);
})

const elementForm = document.getElementById("form");
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