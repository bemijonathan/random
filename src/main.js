import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
// import asignStore from './store/asignees'
// import tagStore from './store/tags'
// import asignStore from './store/asignees'
import './index.css'

createApp(App).use(store).use(router).mount('#app')
