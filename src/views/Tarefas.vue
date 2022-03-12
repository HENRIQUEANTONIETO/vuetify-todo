<template>
  <div>
    <v-col
          cols="12"
        >
          <v-text-field
            label="Qual sua tarefa?"
            outlined
            v-model="campoTarefa"
            @keyup.enter="handleAddTarefa"
          ></v-text-field>
        </v-col> 
    <div v-for="tarefa, index in $store.state.tarefas" :key="index">
      <Tarefa
        :tarefa="tarefa"
      />   
      <ListTarefa />
    </div>

  </div>
 
</template>

<script>
  import ListTarefa from '../components/tarefas/ListTarefas.vue'
  import Tarefa from '../components/tarefas/Tarefa.vue' 
  export default {
    name: 'Home',
    data(){
      return{
        campoTarefa: null,
      }
    },

    components: {
      Tarefa,
      ListTarefa
    },

    methods:{
      handleAddTarefa(){
        this.$store.commit('adicionarTarefa', this.campoTarefa)
        this.campoTarefa = null
      }
    }
  }
</script>
