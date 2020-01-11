<template>
  <div>
    <hr>
    <ul class="list-group">
      <li v-for="(item, index) of listaOrdenada" :key="item.id"
      class="list-item jc-spaceB">
        <div>
          <button @click="aumentar(index)" class="btn-s btn-l-acept mr-1"><i class="a-plus"></i></button>
          <button @click="restar(index)" class="btn-s btn-l-cancel mr-1"><i class="a-minus"></i></button>
          - {{index}} - {{item.nombre}}
        </div>
        <span class="tag-c" :class="[{'tag-blue': item.cantidad > 0}, {'tag-cancel' : item.cantidad <= 0 }]">{{item.cantidad}}</span>
      </li>
    </ul>
    <hr>
  </div>
</template>
<!-- ========================================= -->
<!--               Secion Script               -->
<!-- ----------------------------------------- -->
<script>

  import {mapState, mapMutations} from 'vuex';

  export default {
    name: 'Lista',
    computed:{
      ...mapState(['frutas']),
      listaOrdenada(state){
        return state.frutas.sort( (a , b) => b.cantidad - a.cantidad );
      }
    },
    methods: {
      ...mapMutations(['aumentar', 'restar'])
    },
  }
</script>
<!-- ========================================= -->
<!--                Secion Style               -->
<!-- ----------------------------------------- -->
<style scoped>
  li.list-item{
    font-weight: 700;
    color: var(--text-light) 
  }
</style>