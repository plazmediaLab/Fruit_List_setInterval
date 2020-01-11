<template>
  <div id="app" class="container">
    <Cabecera></Cabecera>
    <Controles></Controles>
    <Lista></Lista>
  </div>
</template>

<script>
import Cabecera from './components/Cabecera.vue'
import Lista from './components/Lista.vue'
import Controles from './components/Controles.vue'

export default {
  name: 'app',
  components: {
    Cabecera,
    Lista,
    Controles
  }
}
</script>

<style>

</style>
