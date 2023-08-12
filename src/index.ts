import { createMarkdownApp, createMarkdownRouter } from "./plugins";
import './index.css'

const app = createMarkdownApp()
const router = createMarkdownRouter()

app.use(router)
app.mount('#app')