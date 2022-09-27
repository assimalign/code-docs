import { createRouter, createWebHistory } from 'vue-router'
import PanopticNetDocs from 'docs-panoptic-net/Docs'
import Home from '../views/home.vue'


const routes = [
    {
        path: '/home',
        component: Home
    },
    {
        path: '/panoptic-net-docs',
        component: PanopticNetDocs
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router