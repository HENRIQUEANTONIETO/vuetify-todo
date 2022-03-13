<template>
  <v-app id="inspire">
    <v-navigation-drawer 
      v-model="drawer"
      app>
      <v-img
        src="./assets/bg.jpg" 
        gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        dark 
        class="pt-5 text-center"
      >
        <v-avatar
          size="100"
        >
          <img
            src="./assets/perfil.jpg"
            alt="Henrique"
          >
        </v-avatar>
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6">
              Vue.js
            </v-list-item-title>
            <v-list-item-subtitle>
              Lista de tarefas
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>
        
      </v-img>
      

      <v-divider></v-divider>

      <v-list
        dense
        nav
      >
        <v-list-item
          v-for="item in items"
          :key="item.title"
          :to="item.to"
          link
        >
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
      height="187"
      app
      color="#fcb69f"
      dark
      prominent
      src="./assets/bg.jpg"

    >
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(28,108,199,.8)"
        ></v-img>
      </template>

      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      
    <v-text-field
      class="mt-16"
      label="Qual sua tarefa?"
      outlined
      v-model="campoTarefa"
      @keyup.enter="handleAddTarefa">
      </v-text-field> 
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>
  export default {
    data: () => ({
      campoTarefa: null,
      drawer: null,
      items: [
          { title: 'Tarefas', icon: 'mdi-view-dashboard', to: '/' },
          { title: 'Sobre', icon: 'mdi-help-box', to: '/sobre' },
      ],
      }),

    methods:{
      handleAddTarefa(){
        this.$store.commit('adicionarTarefa', this.campoTarefa)
        this.campoTarefa = null
      }
    }  
    
  }
</script>