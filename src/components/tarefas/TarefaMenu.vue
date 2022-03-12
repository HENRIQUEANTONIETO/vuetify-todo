<template>
  <div class="text-center">
    <v-menu offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          icon
          color="primary"
          dark
          v-bind="attrs"
          v-on="on"
        >
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item
          v-for="(item, index) in items"
          :key="index"
          @click="item.click()"
        >
          <v-icon>{{item.icon}}</v-icon>  
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <EditModal
      v-if="items[0].modalEdit" 
      @closeModal="items[0].modalEdit = false"
      :tarefa="tarefa"
    />
    <DeleteModal
      v-if="items[1].modalDelete" 
      @closeModal="items[1].modalDelete = false"
      :tarefa="tarefa"
    />
  </div>
</template>

<script>
import EditModal from '../modals/EditModal.vue'
import DeleteModal from '../modals/DeleteModal.vue'
  export default {
  components: { EditModal, DeleteModal },
  props: ['tarefa'],
    data: () => ({
      items: [
        { 
            icon: 'mdi-pencil',
            title: 'Editar',
            modalEdit: false,
            click(){
              this.modalEdit = true
            }
        },
        {
            icon: 'mdi-delete-forever',
            title: 'Excluir',
            modalDelete: false,
            click(){
              this.modalDelete = true
            }
        }
      ],
    }),
  }
</script>

<style>

</style>