// Seleciona os elementos principais
const menuBtn = document.getElementById("menu-btn");
const menu = document.getElementById("menu");
const form = document.getElementById("form-contato");
const nome = document.getElementById("nome");
const email = document.getElementById("email");
const mensagem = document.getElementById("mensagem");
const mensagemStatus = document.getElementById("mensagem-status");

// Abre e fecha o menu no celular
menuBtn.addEventListener("click", function () {
  menu.classList.toggle("ativo");
});

// Função para validar e-mail
function emailValido(valorEmail) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valorEmail);
}

// Função para mostrar mensagem na tela
function mostrarMensagem(texto, tipo) {
  mensagemStatus.textContent = texto;
  mensagemStatus.classList.remove("sucesso", "erro");
  mensagemStatus.classList.add(tipo);
}

// Validação do formulário
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nomeValor = nome.value.trim();
  const emailValor = email.value.trim();
  const mensagemValor = mensagem.value.trim();

  mensagemStatus.textContent = "";
  mensagemStatus.classList.remove("sucesso", "erro");

  if (nomeValor === "" || emailValor === "" || mensagemValor === "") {
    mostrarMensagem("Preencha todos os campos antes de enviar.", "erro");
    return;
  }

  if (!emailValido(emailValor)) {
    mostrarMensagem("Digite um e-mail válido.", "erro");
    return;
  }

  mostrarMensagem("Mensagem enviada com sucesso!", "sucesso");
  form.reset();
});
