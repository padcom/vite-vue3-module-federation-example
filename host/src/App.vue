<template>
  <h1>Hello, world! from Vue.js 3.x and Vite</h1>
  <my-button @click="testme">Click me!</my-button>
</template>

<script>
import { defineComponent, defineAsyncComponent } from 'vue'

const MyButton = defineAsyncComponent(() => import('library/remote-simple-button'))

export default defineComponent({
  components: {
    MyButton,
  },
  methods: {
    testme() {
      console.log('Hello!')
    }
  }
})
</script>
