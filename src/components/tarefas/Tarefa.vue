<template>
  <div>
    <v-list
      flat
      subheader
    >
      <v-list-item-group
        multiple
        active-class="">
        
        <v-list-item 
            :class="{'light-blue lighten-4':tarefa.concluido}"
            @click="tarefa.concluido = !tarefa.concluido">
          <template v-slot:default="{}">
            <v-list-item-action>
              <v-checkbox :input-value="tarefa.concluido"></v-checkbox>
            </v-list-item-action>

            <v-list-item-content>
              <v-list-item-title
                :class="{'text-decoration-line-through':tarefa.concluido}">
                {{tarefa.titulo}}
              </v-list-item-title>
            </v-list-item-content>

            <TarefaMenu
              :tarefa="tarefa"
            />  
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
    <v-divider></v-divider>
  </div>
</template>

<script>
import TarefaMenu from './TarefaMenu.vue'
export default {
  components: { TarefaMenu },
    name: 'Tarefa',
    props: ['tarefa'],
    methods: {
      handleDeleteTarefa(id){
        this.$store.commit('removerTarefa', id)
      }
    }
}
</script>

<style>

</style>