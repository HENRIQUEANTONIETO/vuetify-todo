<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="290"
    >
      <v-card>
        <v-card-title class="text-h5">
          Excluir
        </v-card-title>
        <v-card-text>Tem certeza que deseja excluir?</v-card-text>
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
            @click="deleteTarefa"
          >
            Excluir
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
      }
    },
    created(){
      this.dialog = true
    },
    methods:{
      deleteTarefa(){
        this.$store.commit('removerTarefa', this.tarefa.id)
        this.$emit('closeModal') 
      }
    }
  }
</script>

<style>

</style>