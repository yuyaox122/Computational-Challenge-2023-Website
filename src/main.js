import './styles/app.css';

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import axios from 'axios'


axios.defaults.baseURL = 'http://api.my-innovations.co.uk'

const app = createApp(App)

app.use(createPinia())
app.use(router, axios)

app.mount('#app')

