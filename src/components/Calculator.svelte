<script lang="ts">
  import CalculatorModel from "../model/CalculatorModel";

  import Button from "./Button.svelte";
  import Line from "./Line.svelte";
  import Screen from "./Screen.svelte";

  let calc = new CalculatorModel();

  const numeroDigitado = (num: string) => (calc = calc.numeroDigitado(num));

  const operacaoDigitada = (op: string) => calc = calc.operacaoDigitada(op);

  const calcular = () => calc = calc.calcular();

  const pontoDigitado = () => calc = calc.pontoDigitado();

  const limpar = () => calc = calc.limpar()

</script>

<div class="calculadora">
  <Screen valor={calc.valor} />
  <Line>
    <Button destaque triplo texto="AC" onClick={limpar} />
    <Button operacao texto="/" onClick={operacaoDigitada} />
  </Line>
  <Line>
    <Button texto="7" onClick={numeroDigitado} />
    <!-- alterar a propria instancia calc -->
    <Button texto="8" onClick={numeroDigitado} />
    <Button texto="9" onClick={numeroDigitado} />
    <Button operacao texto="*" onClick={operacaoDigitada} />
  </Line>
  <Line>
    <Button texto="4" onClick={numeroDigitado} />
    <Button texto="5" onClick={numeroDigitado} />
    <Button texto="6" onClick={numeroDigitado} />
    <Button operacao texto="+" onClick={operacaoDigitada} />
  </Line>
  <Line>
    <Button texto="1" onClick={numeroDigitado} />
    <Button texto="2" onClick={numeroDigitado} />
    <Button texto="3" onClick={numeroDigitado} />
    <Button operacao texto="-" onClick={operacaoDigitada} />
  </Line>
  <Line>
    <Button duplo texto="0" onClick={numeroDigitado} />
    <Button texto="," onClick={pontoDigitado} />
    <Button destaque texto="=" onClick={calcular} />
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
