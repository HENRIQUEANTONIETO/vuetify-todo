<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Editar
        </v-card-title>
        <v-card-text>Informe um novo titulo.</v-card-text>
        <v-text-field
            class="mx-2"
            label="Titulo"
            outlined
            v-model="titulo"
          ></v-text-field>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="green darken-1"
            text
            @click="$emit('closeModal')"
          >
            Cancelar
          </v-btn>
          <v-btn
            color="primary darken-1"
            text
            @click="updateTarefa"
          >
            Salvar
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
  export default {
    props: ['tarefa'],
    data () {
      return {
        dialog: true,
        titulo: this.tarefa.titulo
      }
    },
    created(){
      this.dialog = true
    },
    methods:{
      updateTarefa(){
        let tarefaUpdated = {
          id: this.tarefa.id,
          titulo: this.titulo
        }
        this.$store.commit('atualizarTarefa', tarefaUpdated)
        this.$emit('closeModal') 
      }
    }
  }
</script>

<style>

</style>