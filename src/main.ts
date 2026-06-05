import './assets/main.css'

import { createApp } from 'vue'
import { createUnhead, headSymbol } from '@unhead/vue'
import App from './App.vue'
import router from './router'
import { vReveal } from './directives/reveal'

const app = createApp(App)
app.use(router)

const head = createUnhead(() => undefined, { document })
app.provide(headSymbol, head)

app.directive('reveal', vReveal)
app.mount('#app')
