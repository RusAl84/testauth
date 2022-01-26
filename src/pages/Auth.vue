<template>
  <q-page class="flex flex-center">
    <q-card class="full-width">
      <q-card-section>
        {{auth}}
      </q-card-section>
      <q-card-actions>
        <q-input v-model="auth"></q-input>
        <q-btn>Авторизация</q-btn>
      </q-card-actions>
      <q-card-section>
        <div class="q-pa-md q-gutter-sm">
        <q-btn color="red" @click="sendBtn('red')"/>
        <q-btn color="blue" @click="sendBtn('blue')"/>
        <q-btn color="green" @click="sendBtn('green')"/>
        </div>
      </q-card-section>

    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, computed, ref } from 'vue';
import { useStore } from 'vuex'
import api from "../api/api"

export default defineComponent({
  name: 'PageIndex',
  setup(){
    const $store = useStore()
    const auth = computed({
      get: () => $store.state.mes.auth,
      set: val => {
        $store.commit('mes/updateAuth', val)
      }
      }) 
    let colors = ref('black') 
    return {
      auth, colors
      //  <q-btn :style="{'background': colors}"/>
    }
  },
  methods:{
  async getColor(id){
      try{
        color =  await api.getColor(id)  
        return color 
      }catch (e) 
      {
        console.log(e)
      }
    },
  async sendBtn(id){
      try{
        let result =  await api.sendColor(id)  
        console.log(result.length)
        console.log(result)
        if (result.length==8){
          this.auth=1
          console.log("Ёжики пришли")
          alert("Ёжики пришли")
        }
      }catch (e) 
      {
        console.log(e)
      }
    },

  }
})
</script>
