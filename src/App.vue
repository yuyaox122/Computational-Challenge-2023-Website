<template>
  <Navbar />

  <main>
    <RouterView/>
  </main>

</template>

<script>
import Navbar from '@/components/Navbar.vue'

export default {
  setup() {
  },

  components: {
    Navbar
  },

  beforeCreate() {
  }
}
</script>