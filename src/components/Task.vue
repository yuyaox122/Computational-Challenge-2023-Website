<template>
  <head>
      <link rel="stylesheet" href="./prism/prism.css" />
  </head>
  <!--  <p>{{ code }}</p>-->
  <div style="height:800px;overflow:auto">
      <code class="language-py">{{code_text}}</code>
      <!-- <script  type="text/javascript">
        postscribe('#code_here', `<script src="./prism/prism.js"></script>`)
      </script> -->
  </div>
  <!-- <div style="height:800px;overflow:auto">
    <prism language="javascript">{{ code_text }}</prism>
  </div> -->
</template>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-python.min.js"></script> -->

<script>
// import Prism from 'vue-prism-component'
// // import Prism from 'prismjs'
// import 'prismjs/components/prism-python'
// import 'prismjs/components/prism-markdown'
// import 'prismjs/themes/prism.css'
// import 'prismjs/components/prism-clike'
// import { highlight, languages, highlightElement } from 'prismjs'
// import postscribe from 'postscribe'

// export default {
//   props: {
//     code_text: String,
//   },
//   data() {
//     return {
//       code_text: code_text
//     }
//   },
  // components: {
  //   Prism
  // },
  // computed: {
  //   getCode: function () {
  //     return this.code_text
  //   },
  // },
  // mounted() {
  //   window.Prism = window.Prism || {};
  //   window.Prism.manual = true;
  //   Prism.highlightAll(); // highlight your code on mount
  // },
  // mounted: function () {
  //   postscribe('#code_here', `<script src="./prism/prism.js"></script>`)
  // },
// }
</script>


