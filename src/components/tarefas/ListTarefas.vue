<template>
    <div>
        <v-list class="list1">
            <drop-list :items="TarefasComputadas" 
            @reorder="$event.apply(TarefasComputadas)" 
            @insert="insert1" mode="cut"
            >
                <template v-slot:item="{item, reorder}">
                    <drag :key="item.id" :data="item" @cut="remove(items1, item)">
                        <Tarefa 
                        style="background-color: white"
                        :style="reorder ? {borderLeft: '2px solid #1976D2', marginLeft:'-2px'} : {}"
                        :tarefa="item"
                        />    
                    </drag>
                </template>
            </drop-list>
        </v-list>
    </div>
</template>

<script>
import {Drag,DropList} from "vue-easy-dnd";
import Tarefa from "./Tarefa.vue"

    export default {
        name: "App",
        components: {
            Drag,
            DropList,
            Tarefa
            
        },
        methods: {
            insert1(event) {
                this.items1.splice(event.index, 0, event.data);
            },
            insert2(event) {
                this.items2.splice(event.index, 0, event.data);
            },
            remove(array, value) {
                let index = array.indexOf(value);
                array.splice(index, 1);
            }
        },
        computed:{
            TarefasComputadas(){
                return this.$store.state.tarefas
            }
        }
    };
</script>

<style>
    .list1 {
        height: 100%;
    }

    .list2 {
        display: flex;
        height: 100%;
    }

    .chip {
        margin: 10px;
    }

    .drop-allowed.drop-in * {
        cursor: inherit !important;
    }
</style>