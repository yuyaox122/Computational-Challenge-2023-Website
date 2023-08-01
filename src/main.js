import './styles/app.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
// import VueParticlesBg from "particles-bg-vue";

// axios.defaults.baseURL = 'http://localhost:8000'

const app = createApp(App)

app.use(createPinia())
app.use(router)
// app.use(VueParticlesBg);
app.mount('#app')

