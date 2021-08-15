<script lang="ts">
  export let valor: string;

  // $ do próprio Svelte
  // ajustar a fonte dependendo da quantidade de caracteres
  $: tamanhoFonte = valor.length > 20 ? "pequena" : `s-${valor.length}`;
</script>

<div class={`tela ${tamanhoFonte}`}>
  <span>{valor}</span>
</div>

<style>
  .tela {
    display: flex;
    /* Cresce o máximo que der */
    flex: 1;
    justify-content: flex-end;
    align-items: center;
    padding: 0px 5px;
    font-size: 1.7rem;
    overflow: hidden;
    margin: 2px 1px;

    background-color: gainsboro;
    border-top-right-radius: 4px;
    border-top-left-radius: 4px;
  }

  /* ajustar a fonte dependendo da quantidade de caracteres */
  .s-10 {
    font-size: 1.5rem;
  }
  .s-11 {
    font-size: 1.35rem;
  }
  .s-12 {
    font-size: 1.25rem;
  }
  .s-13 {
    font-size: 1.15rem;
  }
  .s-14 {
    font-size: 1.07rem;
  }
  .s-15 {
    font-size: 1rem;
  }
  .s-16 {
    font-size: 0.93rem;
  }
  .s-17 {
    font-size: 0.87rem;
  }
  .s-18 {
    font-size: 0.83rem;
  }
  .s-19 {
    font-size: 0.78rem;
  }
  .s-20 {
    font-size: 0.74rem;
  }

  .pequena {
    font-size: 0.6rem;
  }
</style>
