<script lang="ts">
import { defineComponent } from '@vue/runtime-core'
import Navbar from './components/Navbar.vue'

export default defineComponent({
  name: 'App',
  components: {
    Navbar,
  },
})
</script>

<template>
  <div>
    <Navbar />
    <RouterView />
  </div>
</template>
