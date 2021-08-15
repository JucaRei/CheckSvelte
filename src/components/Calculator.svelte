<script lang="ts">
  import Button from "./Button.svelte";
  import Line from "./Line.svelte";
  import Screen from "./Screen.svelte";

  class Model {
    valor: string;
    constructor(valor: string = "0") {
      this.valor = valor;
    }

    inc() {
      return new Model(`${parseInt(this.valor) + 1}`);
    }
  }

  let obj = new Model();

  // reatividade
  function numeroDigitado(numero: string) {
    // obj.valor += numero;
    obj = obj.inc();
  }
</script>

<div class="calculadora">
  <Screen valor={obj.valor} />
  <Line>
    <Button destaque triplo texto="AC" />
    <Button operacao texto="/" />
  </Line>
  <Line>
    <Button texto="7" onClick={numeroDigitado} />
    <Button texto="8" onClick={numeroDigitado} />
    <Button texto="9" onClick={numeroDigitado} />
    <Button operacao texto="*" />
  </Line>
  <Line>
    <Button texto="4" />
    <Button texto="5" />
    <Button texto="6" />
    <Button operacao texto="+" />
  </Line>
  <Line>
    <Button texto="1" />
    <Button texto="2" />
    <Button texto="3" />
    <Button operacao texto="-" />
  </Line>
  <Line>
    <Button duplo texto="0" />
    <Button texto="," />
    <Button destaque texto="=" />
  </Line>
</div>

<style>
  .calculadora {
    background-color: var(--cor-fundo);
    height: 220px;
    width: 150px;
    padding: 10px;
    border-radius: 10px;

    display: flex;
    flex-direction: column;
  }
</style>
