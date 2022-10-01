import { SidebarConfigArray } from 'vuepress'


export const PanopticAPISidebarConfig: SidebarConfigArray = [
    {
        text: 'Panoptic API',
        collapsible: true,
        children: [
            {
                text: 'Overview',
                link: '/panoptic-db/index.md'
            },
            {
                text: 'Fundamentals',
                link: '/panoptic-db/overview.md'
            }            
        ]
    }
]