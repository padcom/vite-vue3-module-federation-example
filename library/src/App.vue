<template>
  <MyButton @click="sayHello">Click me to say hello</MyButton>
</template>

<script setup>
import MyButton from './MyButton.vue'

function sayHello() {
  console.log('Hello from test app')
}
</script>
