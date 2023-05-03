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

  // Atualiza os valores na tela
  atualizarTela() {
    this.atualOperacaoText.innerText += this.atualOperacao;
  }

  operacoes(operacao) {
    
    let operacaoValor;
    let previa = +this.previaOparacaoText.innerText;
    let atual = +this.atualOperacaoText.innerText;


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
