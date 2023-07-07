<template>
  <div class="p-12 bg-white border border-gray-200 rounded-lg">
    <form class="space-y-6" v-on:submit.prevent="submitForm">
      <div>
        <label>Number</label><br>
        <input type="number" v-model="form.number" placeholder="Please input a number"
               class="w-full mt-2 py-4 px-6 border border-gray-200 rounded-lg">
      </div>

      <div v-if="form.factors.length > 0">
        <label>Factors</label><br>
        <output class="italic" name="factors">{{ form.factors }}</output>
      </div>

      <template v-if="errors.length > 0">
        <div class="bg-red-300 text-white rounded-lg p-6">
          <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
        </div>
      </template>

      <div>
        <button class="py-4 px-6 bg-purple-600 text-white rounded-lg">Find factors</button>
      </div>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

import { useUserStore } from '@/stores/user'

export default {
  data() {
      return {
          form: {
              number: '',
              factors: '',
          },
          errors: []
      }
  },
  methods: {
      async submitForm() {
          this.errors = []

          if (this.form.number === '') {
              this.errors.push('Your number is missing')
          }

          if (this.errors.length === 0) {
              await axios
                  .post('/api/get_factors/', this.form)
                  .then(response => {

                      this.form.factors = response.data.factors

                  })
                  .catch(error => {
                      console.log('error', error)
                  })
          }
      }
  }
}
</script>