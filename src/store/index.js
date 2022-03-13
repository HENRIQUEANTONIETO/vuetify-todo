import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tarefas: [],
  },
  mutations: {
    adicionarTarefa(state, titulo){
      if(titulo){
        state.tarefas.push({
          id: new Date().getTime(),
          titulo,
          concluido: false
        })
        this.campoTarefa = null
      }
    },
    removerTarefa(state, id){
      state.tarefas = state.tarefas.filter(tarefa => tarefa.id !== id)
    },
    atualizarTarefa(state, tarefaUpdated){
      let tarefa = state.tarefas.filter(tarefa => tarefa.id == tarefaUpdated.id)[0] 
      tarefa.titulo = tarefaUpdated.titulo 
      
    }
  },
  actions: {
  },
  modules: {
  }
})
