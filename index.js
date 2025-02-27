"strict mode";
// Elementos
const rolaDado = document.querySelector(".Rolar--dado");
const tab = document.querySelectorAll(".tab");
const dicePNG = document.querySelector(".dado");
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
  D4: () => Math.trunc(Math.random() * 4) + 1,
  D6: () => Math.trunc(Math.random() * 6) + 1,
  D8: () => Math.trunc(Math.random() * 8) + 1,
  D10: () => Math.trunc(Math.random() * 10) + 1,
  D12: () => Math.trunc(Math.random() * 12) + 1,
  D20: () => Math.trunc(Math.random() * 20) + 1,
};

//Armazenamento dos Dados
let rolagens = [];

//Hidden
dicePNG.classList.add("hidden");

// Rolagem do Dado
rolaDado.addEventListener("click", function () {
  const abaAtiva = document.querySelector(".tab.active");
  if (abaAtiva) {
    const tipoDado = abaAtiva.id;
    const resultado = dados[tipoDado]();
    console.log(tipoDado);
    // dicePNG.src = `dice-${resultado}.png`;
    dicePNG.classList.remove("hidden");

    //Adiciona o dado na array do histórico
    rolagens.push(`${abaAtiva.id}: ${resultado}`);
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
