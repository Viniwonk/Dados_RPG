"strict mode";
// Elementos
const rolaDado = document.querySelector(".Rolar--dado");
const tab = document.querySelectorAll(".tab");
const rolada = document.querySelector(".resultado");
const historico = document.getElementById("historico");

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
    // // FAZER UM MODAL PARA A MENSAGEM SE A PESSOA N SELECIONAR O DADO
  }
});

//Histórico de Rolagens
function mostrarRolagens() {
  historico.innerHTML = rolagens.join("<br>");
}

console.log(rolagens);
