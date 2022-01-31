<template>
  <q-page class="flex flex-center">
    <q-card >
      <div v-if="$store.state.mes.auth==1">
      <h3>Основной контент</h3>
      <img
        alt="Quasar logo"
        src="~assets/quasar-logo-vertical.svg"
        style="width: 200px; height: 200px"
      >
      </div>
      <div v-else>
        <h3>Пожалуйста авторизируйтесь. Иначе ёжики</h3>
      </div>
    </q-card>
  </q-page>
</template>

<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex'

export default defineComponent({
  name: 'PageIndex',
  setup (){
    const $store = useStore()
    return{
      $store
    }
  }
})
</script>
