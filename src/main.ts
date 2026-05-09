import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import { vReveal } from './directives/reveal'

const app = createApp(App)
app.directive('reveal', vReveal)
app.mount('#app')
