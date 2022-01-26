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
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent, computed } from 'vue';
import { useStore } from 'vuex'

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
    return {
      auth
    }
  }
})
</script>
