<template>
  <div>
    <ListTarefa />

    <div v-if="this.$store.state.tarefas.length < 1">
      <center>
        <v-icon
          size="200"
          color="primary"
        >
          mdi-check
        </v-icon>
        <h2>Nenhuma tarefa cadastrada</h2>
      </center>
      
    </div>
  </div>
 
</template>

<script>
  import ListTarefa from '../components/tarefas/ListTarefas.vue'
  export default {
    name: 'Home',

    components: {
      ListTarefa
    },
  }
</script>
