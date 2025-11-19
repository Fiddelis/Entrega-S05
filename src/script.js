const formSimulacao = document.getElementById("simulacao-form");
const inputValorMensal = document.getElementById("valor-mensal");
const boxResultado = document.getElementById("simulacao-resultado");

const totalVencimentosMes = 780;

if (formSimulacao && inputValorMensal && boxResultado) {
  formSimulacao.addEventListener("submit", (e) => {
    e.preventDefault();
    const valor = Number(inputValorMensal.value || 0);

    boxResultado.classList.remove(
      "sim-result-neutral",
      "sim-result-ok",
      "sim-result-alert"
    );

    if (!valor) {
      boxResultado.textContent =
        "Preencha um valor válido para realizar a simulação.";
      boxResultado.classList.add("sim-result-alert");
      return;
    }

    if (valor >= totalVencimentosMes) {
      boxResultado.innerHTML = `
        Com o valor de <strong>R$ ${valor.toFixed(
          2
        )}</strong>/mês, os vencimentos atuais de
        <strong>R$ ${totalVencimentosMes.toFixed(
          2
        )}</strong> cabem no seu orçamento.`;
      boxResultado.classList.add("sim-result-ok");
    } else {
      const diferenca = totalVencimentosMes - valor;
      boxResultado.innerHTML = `
        Com o valor de <strong>R$ ${valor.toFixed(
          2
        )}</strong>/mês, faltam aproximadamente
        <strong>R$ ${diferenca.toFixed(
          2
        )}</strong> para cobrir todos os vencimentos atuais.
        Considere negociar prazos ou buscar novos auxílios.`;
      boxResultado.classList.add("sim-result-alert");
    }
  });
}

// Filtro de prazos

const filtroPrazos = document.querySelector(".finance-filter");
const itensPrazos = document.querySelectorAll(".deadline-item");

if (filtroPrazos && itensPrazos.length) {
  filtroPrazos.addEventListener("change", () => {
    const tipo = filtroPrazos.value;
    itensPrazos.forEach((item) => {
      if (tipo === "todos" || item.dataset.tipo === tipo) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
}

// Lembretes (toggle visual)

const botoesLembrete = document.querySelectorAll(".btn-reminder");

botoesLembrete.forEach((botao) => {
  botao.addEventListener("click", () => {
    const ativo = botao.classList.toggle("btn-reminder-active");
    botao.textContent = ativo ? "Lembrete ativo" : "Ativar lembrete";
  });
});
