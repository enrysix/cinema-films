import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// CSS styles
import './assets/styles/globals.scss'

const app = createApp(App)

// Mount App
app.use(router).mount('#app')