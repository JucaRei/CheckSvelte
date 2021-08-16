// Sempre que for digitado um numero, a não ser que seja uma operação
const NAO_LIMPAR_TELA = false
const LIMPAR_TELA = true

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
    // console.log(novoValor)
    return new CalculatorModel(
      (this.#limpaTela || !this.#valor) ? novoValor : this.#valor + novoValor,
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA,
    )
  }

  pontoDigitado() {
    return new CalculatorModel(
      // caso tenha ponto digitado, não pode digitar outro
      this.#valor?.includes(".") ? this.#valor : this.#valor + ".",
      this.#acumulador,
      this.#operacao,
      NAO_LIMPAR_TELA,
    )
  }

  limpar() {
    // lembrando que tem por padrão no model como null
    return new CalculatorModel()
  }

  operacaoDigitada(proximaOperacao: string) {
    return this.calcular(proximaOperacao)
  }

  calcular(proximaOperacao: string = null) {
    const acumulador = !this.#operacao 
      ? parseFloat(this.#valor) 
      : eval(`${this.#acumulador} ${this.#operacao} ${this.#valor}`)

    // operação ainda não foi definida | valor atual | vai pro valor(string)
    const valor = !this.#operacao ? this.#valor : `${acumulador}`

    return new CalculatorModel(
      valor,
      acumulador,
      proximaOperacao,
      proximaOperacao ? LIMPAR_TELA : NAO_LIMPAR_TELA
      )
  }
}
