import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from 'vuepress'

import * as sidebar from './configurations/sidebar'



export default defineUserConfig({
    theme: defaultTheme({
        sidebar: [
            {
                text: 'Assimalign Docs',
                link: '/'
            },
            ...sidebar.PanopticAPISidebarConfig,
            ...sidebar.PanopticDBSidebarConfig,
            ...sidebar.PanopticNETSidebarConfig

        ]

    }),
    bundler: viteBundler({
        viteOptions: {
        
        },
        vuePluginOptions: {},
    }),
})