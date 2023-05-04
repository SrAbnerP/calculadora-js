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
    // Checa se o valor é null
    if (this.atualOperacaoText.innerText === "" && operacao !== "C") {
      // Mudança de operacao
      if (this.previaOparacaoText.innerText !== "") {
        this.mudarOperacao(operacao);
      }
      return;
    }

    /*if (
      this.previaOparacaoText.innerText !== "" &&
      this.atualOperacaoText.innerText !== "" &&
      operacao == "=" &&
      operacao !== "C" &&
      operacao !== "CE" &&
      operacao !== "DEL"
    ) {
      this.igualOperacao();
    }*/

    let operacaoValor;
    const previa = +this.previaOparacaoText.innerText.split(" ")[0];
    const atual = +this.atualOperacaoText.innerText;

    switch (operacao) {
      case "+":
        operacaoValor = previa + atual;
        this.atualizarTela(operacaoValor, operacao, atual, previa);
        break;
      case "-":
        operacaoValor = previa - atual;
        this.atualizarTela(operacaoValor, operacao, atual, previa);
        break;
      case "/":
        operacaoValor = previa / atual;
        this.atualizarTela(operacaoValor, operacao, atual, previa);
        break;
      case "*":
        operacaoValor = previa * atual;
        this.atualizarTela(operacaoValor, operacao, atual, previa);
        break;
      case "DEL":
        this.delOperacao();
        break;
      case "CE":
        this.ceOperacao();
        break;
      case "C":
        this.cOperacao();
        break;
      case "=":
        this.igualOperacao();
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
      if (previa === 0) {
        operacaoValor = atual;
      }

      // Add o valor atual para o previa
      this.previaOparacaoText.innerText = `${operacaoValor} ${operacao}`;
      this.atualOperacaoText.innerText = "";
    }
  }

  // Muda operador
  mudarOperacao(operacao) {
    const mathOperacao = ["*", "/", "+", "-"];

    if (!mathOperacao.includes(operacao)) {
      return;
    }

    this.previaOparacaoText.innerText =
      this.previaOparacaoText.innerText.slice(0, -1) + operacao;
  }

  // Deleta o ultimo digito
  delOperacao() {
    this.atualOperacaoText.innerText = this.atualOperacaoText.innerText.slice(
      0,
      -1
    );
  }

  // Deleta o numero atual
  ceOperacao() {
    this.atualOperacaoText.innerText = "";
  }

  // Deleta tudo
  cOperacao() {
    this.atualOperacaoText.innerText = "";
    this.previaOparacaoText.innerText = "";
  }

  // Igual
  igualOperacao() {
    const operacao = previaOparacaoText.innerHTML.split(" ")[1];

    this.operacoes(operacao);
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

window.addEventListener("keydown", (e) => {
  const valor = e.key;

  if (+valor >= 0 || valor === ".") {
    calc.addDigito(valor);
  } else {
    calc.operacoes(valor);
  }

  if (valor == "Enter") {
    calc.operacoes("=");
    calc.igualOperacao();
  }
});
