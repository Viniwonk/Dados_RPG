"strict mode";
// Elementos
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const rolaDado = document.querySelector(".Rolar--dado");
const tab = document.querySelectorAll(".tab");
const rolada = document.querySelector(".resultado");
const historico = document.getElementById("historico");
const closeModal = document.querySelector(".close");

// Janela Modal
function abrirModal() {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  setTimeout(() => {
    modal.classList.add("show");
    overlay.classList.add("show");
  }, 10);
}
function fecharModal() {
  modal.classList.remove("show");
  overlay.classList.remove("show");
  setTimeout(() => {
    modal.classList.add("hidden");
    overlay.classList.add("hidden");
  }, 300);
}
closeModal.addEventListener("click", fecharModal);
overlay.addEventListener("click", fecharModal);
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape" && !modal.classList.contains("hidden")) {
    fecharModal();
  }
});

//Aba Ativa
function abaAtiva(button) {
  tab.forEach(function (btn) {
    btn.classList.remove("active");
  });
  button.classList.add("active");
}
tab.forEach(function (button) {
  button.addEventListener("click", function () {
    abaAtiva(button);
  });
});

// Dados
const dados = {
  D4: () => Math.ceil(Math.random() * 4),
  D6: () => Math.ceil(Math.random() * 6),
  D8: () => Math.ceil(Math.random() * 8),
  D10: () => Math.ceil(Math.random() * 10),
  D12: () => Math.ceil(Math.random() * 12),
  D20: () => Math.ceil(Math.random() * 20),
};

//Armazenamento dos Dados
let rolagens = [];

// Rolagem do Dado
rolaDado.addEventListener("click", function () {
  const abaAtiva = document.querySelector(".tab.active");
  if (abaAtiva) {
    const tipoDado = abaAtiva.id;
    const resultado = dados[tipoDado]();
    console.log(tipoDado);
    rolada.textContent = resultado;
    //Adiciona o dado na array do histórico
    rolagens.push(`${abaAtiva.id} - ${resultado}`);
    mostrarRolagens();
  } else {
    abrirModal();
  }
});

// fazer algo para q a pessoa possa adicionar modificadores nos dados +1 ou +10 sei la
// fazer com q o botão selecionado continue ativo

//Histórico de Rolagens
function mostrarRolagens() {
  historico.innerHTML = rolagens.join("<br>");
}

console.log(rolagens);
