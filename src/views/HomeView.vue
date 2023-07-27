<template>
  <main>
    <template v-if="!userStore.user.isAuthenticated">
            <div>
              <router-link :to= "{path : '/login'}"><button class="inline-block py-2 px-6 bg-purple-600 text-white rounded-lg">Click to log in</button></router-link>
            </div>
            <a href="#">
              <img src="http://api.my-innovations.co.uk/logo.jpg" class="w-[40px] rounded-full">
            </a>
          </template>
  </main>
</template>
<script>
import axios from 'axios'
import Toast from '@/components/Toast.vue'
import {useUserStore} from '@/stores/user'

export default {


  data() {
      return {
         is_home: false
      }
  },

  components: {
    Toast
  },
}
</script>


