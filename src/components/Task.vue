<template>
  <!--  <p>{{ code }}</p>-->
  <!-- <div style="height:800px;overflow:auto">
    <pre>
    <code class="language-python">
{{code_text}}
    </code>
  </pre>
  </div> -->
   <div style="height:800px;overflow:auto">
    <pre>
    <code class="language-python">
{{code_text}}
    </code>
  </pre>
  </div>
</template>

<!-- <script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/prism.min.js"></script>

<script src="https://cdnjs.cloudflare.com/ajax/libs/prism/1.17.1/components/prism-python.min.js"></script> -->

<script>

import Prism from 'prismjs'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-markdown'
import 'prismjs/themes/prism.css'
import 'prismjs/components/prism-clike'
// import { highlight, languages, highlightElement } from 'prismjs'

export default {
  props: {
    code_text: String,
  },
  // data() {
  //   return {
  //     code: ''
  //   }
  // },
  components: {
    Prism
  },
  mounted() {
    window.Prism = window.Prism || {};
    window.Prism.manual = true;
    Prism.highlightAll(); // highlight your code on mount
  }
}
</script>


