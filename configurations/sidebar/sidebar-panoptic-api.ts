import { SidebarConfigArray } from 'vuepress'


export const PanopticAPISidebarConfig: SidebarConfigArray = [
    {
        text: 'Panoptic API',
        collapsible: true,
        children: [
            {
                text: 'Overview',
                link: '/panoptic-api/index.md'
            },
            {
                text: 'Fundamentals',
                link: '/panoptic-api/overview.md'
            }            
        ]
    }
]