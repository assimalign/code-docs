import { Plugin, App, inject } from "vue";
import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const injectionKey = 'markdown-aut-router'

export type MarkdownRouterRoute = {
    path: string
    label: string
    children: MarkdownRouterInfo[]
}
export type MarkdownRouterInfo = {
    routes: MarkdownRouterRoute[]
}
export type MarkdownRouterOptions = {
    path?: string
}
export const useMarkdownRouterInfo = (): MarkdownRouterInfo => {
    return inject<MarkdownRouterInfo>(injectionKey) as MarkdownRouterInfo
}
export const createMarkdownRouter = (): Plugin => {

    const routerInfo: MarkdownRouterInfo = {
        routes: []
    }

    const configureRoute = (value: string) => {
        let route = ''
        for (let i = 0; i < value.length; i++) {
            if (value[i] === ' ') {
                route = route + '-'
            } else if (value[i] === '&') {
                route = route + 'and'
            } else if (value[i] === '(' || value[i] === ')') {
                route = route
            } else {
                route = route + value[i]
            }
        }
        route = route.replace('---', '-')

        return route
    }

    const install = (app: App, options: MarkdownRouterOptions) => {
        const routes: RouteRecordRaw[] = []
        const documents = import.meta.glob('../../../docs/**/*.md')
        
        for (let document in documents) {
            let component = documents[document]
            let path = document.substring(document.indexOf('docs') + 4, document.length - 3).toLowerCase()
            let route = configureRoute(path)
            
            routes.push({
                path: route,
                component
            })
        }
        const router = createRouter({
            routes,
            history: createWebHashHistory()
        })

        app.provide(injectionKey, routerInfo)
        app.use(router)
    }
    return {
        install
    }
}