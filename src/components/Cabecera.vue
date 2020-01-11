<template>
  <div class="vm-6" id="cabecera">
    <img class="logoIndex" alt="Vue logo" src="@/assets/imagotype-color.svg">
    <h1 class="txt-secondary">Fruit List <i class=" a-shopping_basket"></i></h1>
  </div>
</template>

<script>
  export default {
    name: 'Cabecera'
  }
</script>
<!-- -->
<style scoped>
  #cabecera{
    text-align: center;
  }
  #cabecera h1{
    text-align: center;
  }
  .logoIndex{
    width: 300px;
    margin: 0 auto;
  }
</style>