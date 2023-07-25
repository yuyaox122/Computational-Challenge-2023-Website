<template>
  <Navbar />

  <main>
    <RouterView/>
  </main>

  <Toast/>
</template>

<script>
import axios from 'axios'
import Toast from '@/components/Toast.vue'
import Navbar from '@/components/Navbar.vue'
import {useUserStore} from '@/stores/user'

export default {
  setup() {
    const userStore = useUserStore()

    return {
      userStore
    }
  },

  // data() {
  //     return {
  //        is_home: false
  //     }
  // },

  components: {
    Toast, 
    Navbar
  },

  beforeCreate() {
    this.userStore.initStore()

    const token = this.userStore.user.access

    if (token) {
      axios.defaults.headers.common["Authorization"] = "Bearer " + token;

    } else {
      axios.defaults.headers.common["Authorization"] = "";

    }
  }
}
</script>