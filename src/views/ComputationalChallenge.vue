<template>
    <!-- <head>
      <link rel="stylesheet" href="./prism/prism.css" />
  </head> -->
  <h1 class="mb-6 text-1xl">Task 1 
    <span style="float:right;">
      <router-link :to= "{path : '/feed'}"><button class="inline-block py-2 px-2 bg-purple-500 text-white rounded-lg">Home</button>
      </router-link>
    </span>
  </h1>
  <div style="margin: 0 auto;" v-if="errors.length > 0">
          <div class="bg-blue-100 text-red rounded-lg p-2">
              <p v-for="error in errors" v-bind:key="error">{{ error }}</p>
          </div>
  </div>
  <VueTailwindPagination :current="currentPage" :total="total" :per-page="perPage" @page-changed="onPageClick($event)"/>
  <div class="max-w-7xl mx-auto grid grid-cols-6 gap-4">
    <div class="main-center col-span-4 space-y-4">
      <div style="height:800px;overflow:auto">
          <vue-code-highlight language="javascript">
            <pre>
              {{code_text}}
            </pre>
          </vue-code-highlight>
        <!-- <pre><code>{{code_text}}</code></pre> -->
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

// import Task from "@/components/Task.vue";
import axios from 'axios'
// import Prism from 'vue-prism-component'

// import Prism from 'prismjs'
// import 'prismjs/components/prism-python'
// import 'prismjs/components/prism-markdown'
// import 'prismjs/themes/prism.css'
// import 'prismjs/components/prism-clike'
import { component as VueCodeHighlight } from 'vue-code-highlight';
// import 'prism-es6/components/prism-markup-templating';
// import 'prism-es6/components/prism-python';
export default {
  name: 'ComputationalChallenge',
  components: {
    VueTailwindPagination,
    VueCodeHighlight,
    // Prism
    // Task,
  },
  data() {
    return {
      currentPage: 0,
      perPage: 0,
      total: 0,
      code_text: "",
      data: [],
      errors:[]

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
      ).catch(error => {
          console.log('error', error)
          this.errors.push(error)
      });

      const responseData = response.data;
      this.currentPage = responseData.page;
      this.perPage = responseData.perPage;
      this.total = responseData.total;
      this.data = response.data.data;
      // console.log(this.data.code_filename);
      const self = this
      // axios.get('http://localhost:5173/code_files/' + this.data.code_filename).then(function(response) {
      //   self.code_text = String(response.data)
      //   console.log(self.code_text)
      // }).catch(error=> {
      //     console.log('error', error)
      //     this.errors.push(error)
      // });
      // console.log(response.data)
      this.code_text = String(responseData.data.code)
      // Prism.highlightAll();
    },
  },
  computed: {

     getvideolink: function() {
      return this.data.video_link
    },
    // formatted_code: function(){
    //   var highlightedCode= Prism.highlight(this.code_text, Prism.languages.python,'language-python');
    //   return highlightedCode.toString()
    // }

  },
  mounted(){
    this.currentPage = 1;
    this.getData(this.currentPage);
    // window.Prism = window.Prism || {};
    // window.Prism.manual = true;
    // Prism.highlightAll(); // highlight your code on mount
  }
};
</script>