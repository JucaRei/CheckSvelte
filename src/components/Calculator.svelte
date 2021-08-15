<script lang="ts">
  import Button from "./Button.svelte";
  import Line from "./Line.svelte";
  import Screen from "./Screen.svelte";
</script>

<div class="calculadora">
  <Screen valor="0123456789005445" />
  <Line>
    <Button destaque triplo texto="AC" />
    <Button operacao texto="/" />
  </Line>
  <Line>
    <Button texto="7" />
    <Button texto="8" />
    <Button texto="9" />
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
