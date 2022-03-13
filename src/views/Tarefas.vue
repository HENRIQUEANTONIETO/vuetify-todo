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
       <ListTarefa />
  </div>
 
</template>

<script>
  import ListTarefa from '../components/tarefas/ListTarefas.vue'
  export default {
    name: 'Home',
    data(){
      return{
        campoTarefa: null,
      }
    },

    components: {
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
