const NAO_LIMPAR_TELA = false

export default class CalculatorModel {
  // # atributos privados
  #valor: string
  #acumulador: number
  #operacao: string
  #limpaTela: boolean

  constructor(valor: string = null, acumulador: number = null,operacao:string = null, limpaTela = false) {
    this.#valor = valor
    this.#acumulador = acumulador
    this.#operacao = operacao
    this.#limpaTela = limpaTela
  }

  // getter | setter
  get valor() {
    // ? optional chaining
    return this.#valor?.replace(".", ",") || "0"
  }

  numeroDigitado(novoValor: string) {
    return new CalculatorModel(
      (this.#limpaTela || !this.#valor) ? novoValor : this.#valor + novoValor,
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA,
    )
  }

}
