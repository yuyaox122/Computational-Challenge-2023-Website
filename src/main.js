import './styles/app.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'
// import "prismjs";
// import 'prismjs/themes/prism.css'
// import "prismjs/themes/prism-funky.css";
// import "prismjs/components/prism-scss.min";
// import "prismjs/plugins/autolinker/prism-autolinker.min";
// import "prismjs/plugins/autolinker/prism-autolinker.css";
// import Prism from "vue-prism-component";
// Vue.component("prism", Prism);
// import VueCodeHighlight from 'vue-code-highlight';



axios.defaults.baseURL = 'http://localhost:8000/api'

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)
// app.use(VueCodeHighlight) //registers the v-highlight directive
app.mount('#app')

