<template>
  <div>
    <button class="button2" v-bind="$attrs">
      <slot />
    </button>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  inheritAttrs: false,
  mounted() {
    console.log('MyButton2.mounted()')
  },
  beforeUnmount() {
    console.log('MyButton2.beforeUnmount()')
  },
})
</script>

<style scoped>
.button2 {
  color: darkblue;
  font-weight: bold;
  border-radius: 5px;
  padding: 5px 25px;
}
</style>
