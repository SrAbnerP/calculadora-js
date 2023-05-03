const previaOparacaoText = document.querySelector("#previa-operacao");
const atualOperacaoText = document.querySelector("#atual-operacao");
const botoes = document.querySelectorAll("#botao-container button");

class Calculadora {
  constructor(previaOparacaoText, atualOperacaoText) {
    this.previaOparacaoText = previaOparacaoText;
    this.atualOperacaoText = atualOperacaoText;
    this.atualOperacao = "";
  }
}

const calc = new Calculadora(previaOparacaoText, atualOperacaoText);

botoes.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    const valor = e.target.innerText;

    if (+valor >= 0 || valor === ".") {
      console.log(valor);
    } else {
      console.log(valor);
    }
  });
});
