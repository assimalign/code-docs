import { viteBundler } from '@vuepress/bundler-vite'
import { defineUserConfig } from '@vuepress/cli'
import { defaultTheme } from 'vuepress'

import sidebar from './configurations/sidebar'

export default defineUserConfig({
    theme: defaultTheme({
        sidebar: [
            {
                text: 'Assimalign Docs',
                collapsible: true,
                link: '/'
            },
            ...sidebar

        ]

    }),
    bundler: viteBundler({
        viteOptions: {
        
        },
        vuePluginOptions: {},
    }),
})