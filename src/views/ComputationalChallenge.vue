<template>
  <h1 class="mb-6 text-2xl">Task 1</h1>
  <VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage" @page-changed="onPageClick($event)"/>
  <div class="max-w-7xl mx-auto grid grid-cols-6 gap-4">
    <div class="main-center col-span-4 space-y-4">
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <Task :code_text="code_text"/>
      </div>

    </div>
    <div class="main-center col-span-2">
      <div class="p-4 bg-white border border-gray-200 rounded-lg">
        <iframe height="250" width="350" title="vimeo-player" :src="getvideolink" frameborder="0"
                allowfullscreen></iframe>
      </div>
    </div>
  </div>
</template>

<script>
import '@ocrv/vue-tailwind-pagination/styles'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'

import Task from "@/components/Task.vue";
import axios from 'axios'

export default {
  name: 'ComputationalChallenge',
  components: {
    VueTailwindPagination,
    Task,
  },
  data() {
    return {
      currentPage: 0,
      perPage: 0,
      total: 0,
      code_text: "",
      data: [],

    };
  },
  methods: {
    onPageClick(event) {
      this.currentPage = event;
      this.getData(this.currentPage);
    },
    async getData(pageNumber) {
      const response = await axios.post(
          '/api/show_section/', {"id": pageNumber, 'category': "COMPUTATIONAL_CHALLENGE"}
      );
      console.log(response.data)
      const responseData = response.data;
      this.currentPage = responseData.page;
      this.perPage = responseData.perPage;
      this.total = responseData.total;
      this.data = response.data.data;
      console.log(this.data.code_filename);
      const self = this
      axios.get('http://localhost:5173/code_files/' + this.data.code_filename).then(function(response) {
        self.code_text = String(response.data)
        console.log(self.code_text)
      });
      // this.code_text = String(responseData.data.code)
    },
  },
  computed: {
     getvideolink: function() {
      return this.data.video_link
    },
  },
  mounted(){
    this.currentPage = 1;
    this.getData(this.currentPage);
  }
};
</script>