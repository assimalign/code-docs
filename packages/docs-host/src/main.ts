import { createApp, defineAsyncComponent } from 'vue'
import { createPinia } from 'pinia'
import './index.css'
import App from './app.vue'
import router from './routing'

const app = createApp(App)
const pinia = createPinia()

app.use(pinia)


const PanopticNetDocs = defineAsyncComponent(()=> import('docs-panoptic-net/docs'))
app.component('PanopticNetDocs',  PanopticNetDocs)

app.use(router)
app.mount('#app')