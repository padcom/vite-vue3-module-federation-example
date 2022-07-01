<template>
  <h1>{{ counter }}</h1>
  <ul>
    <li><input type="checkbox" v-model="show" />Show ui</li>
  </ul>
  <MyButton v-if="show" @click="counter++">Inc</MyButton>
  <MyButton2 v-if="show" @click="counter--">Dec</MyButton2>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

import Loading from './Loading.vue'
import Error from './Error.vue'

function defineFederatedComponent(importer, component, options = {}) {
  return defineAsyncComponent({
    loader: async () => (await importer()).default[component],
    loadingComponent: Loading,
    errorComponent: Error,
    timeout: 2000,
    ...options,
  })
}

export default defineComponent({
  components: {
    MyButton: defineFederatedComponent(() => import('library/components'), 'MyButton'),
    MyButton2: defineFederatedComponent(() => import('library/components'), 'MyButton2'),
  },
  data() {
    return {
      counter: 0,
      show: false,
    }
  },
  methods: {
    testme() {
      console.log('Hello!')
    }
  }
})
</script>
