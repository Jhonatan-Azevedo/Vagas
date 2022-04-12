import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

const emitter = mitt()

const app = createApp(App) 
// createApp(App).mount('#app')

app.config.globalProperties.emitter = emitter

app.mount('#app')
