import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    frutas:[
      {nombre: "Manzana", cantidad: 0},
      {nombre: "Fresa", cantidad: 0},
      {nombre: "Pera", cantidad: 0},
      {nombre: "Uva", cantidad: 0},
      {nombre: "Piña", cantidad: 0}
    ],
    ordenarLista(){
      setTimeout(()=>{
        return this.frutas.sort( (a , b) => b.cantidad - a.cantidad );
      }, 5000)
      console.log(this.timeoutID)
    },
  },
  mutations: {
    aumentar(state, index){
      state.frutas[index].cantidad ++;
      state.ordenarLista();
    },
    restar(state, index){
      state.frutas[index].cantidad --;
      state.ordenarLista();
    },
    reiniciar(state){
      // for (const item of state.frutas) {
      //   item.cantidad = 0
      // }
      state.frutas.forEach(item =>{
        item.cantidad = 0
      })
    },
    agregarFruta(state){
      state.frutas.push({nombre: state.nuevaFruta, cantidad: 0})
      // console.log('Connect')
    }
  },
  actions: {

  },
  modules: {
  }
})
