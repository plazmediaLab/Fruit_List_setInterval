<template>
  <div>
    <button class="btn btn-100 btn-warning" @click="reiniciar">Vaciar cantidades <i class="a-trash-o"></i></button>
    <!-- <div class="grid">
      <input v-model="nuevaFruta" 
      type="text"  placeholder="Agregar una fruta">
      <button class="btn btn-blue" @click="agregarFruta">Agregar</button>
    </div> -->
  </div>
</template>
<!-- ========================================= -->
<!--               Secion Script               -->
<!-- ----------------------------------------- -->
<script>
  import {mapState, mapMutations} from 'vuex';

  export default {
    name: 'Controles',
    computed: {
      ...mapState(['nuevaFruta'])
    },
    methods:{
      ...mapMutations(['reiniciar', 'agregarFruta'])
    }
  }
</script>
<!-- ========================================= -->
<!--                Secion Style               -->
<!-- ----------------------------------------- -->
<style scoped>
  .grid{
    display: grid;
    grid-template-columns: 1fr auto;
    grid-column-gap: 1rem;
    margin: 1rem 0;
  }
</style>