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

/**
 * Defines an async component that has its implementation in a federated library
 *
 * @param {import('vue').AsyncComponentLoader} importer library to import (see `defineAsyncComponent()`)
 * @param {String} component name of the component to import
 * @param {import('vue').AsyncComponentOptions} options additional options (see `defineAsyncComponent()`)
 */
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
    MyButton: defineFederatedComponent(() => import('library/root'), 'MyButton'),
    MyButton2: defineFederatedComponent(() => import('library/root'), 'MyButton2'),
  },
  data() {
    return {
      counter: 0,
      show: false,
    }
  },
})
</script>
