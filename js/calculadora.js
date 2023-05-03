const previaOparacaoText = document.querySelector("#previa-operacao");
const atualOperacaoText = document.querySelector("#atual-operacao");
const botoes = document.querySelectorAll("#botao-container button");

class Calculadora {
  constructor(previaOparacaoText, atualOperacaoText) {
    this.previaOparacaoText = previaOparacaoText;
    this.atualOperacaoText = atualOperacaoText;
    this.atualOperacao = "";
  }

  // Add o digito da calculadora na tela
  addDigito(digito) {
    // Checa se ja existe um ponto
    if (digito === "." && this.atualOperacaoText.innerText.includes(".")) {
      return;
    }

    this.atualOperacao = digito;
    this.atualizarTela();
  }

  // Realiza as operacoes
  operacoes(operacao) {
    let operacaoValor;
    const previa = +this.previaOparacaoText.innerText;
    const atual = +this.atualOperacaoText.innerText;

    switch (operacao) {
      case "+":
        operacaoValor = previa + atual;
        this.atualizarTela(operacaoValor, operacao, atual, previa);
        break;

      default:
        return;
    }
  }

  // Atualiza os valores na tela
  atualizarTela(
    operacaoValor = null,
    operacao = null,
    atual = null,
    previa = null
  ) {
    if (operacaoValor == null) {
      this.atualOperacaoText.innerText += this.atualOperacao;
    } else {
      // Checa se o valor for zero, ele add o valor atual
    }
  }
}

const calc = new Calculadora(previaOparacaoText, atualOperacaoText);

botoes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const valor = e.target.innerText;

    if (+valor >= 0 || valor === ".") {
      calc.addDigito(valor);
    } else {
      calc.operacoes(valor);
    }
  });
});
