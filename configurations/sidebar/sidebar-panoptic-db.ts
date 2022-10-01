import { SidebarConfigArray } from 'vuepress'


export const PanopticDBSidebarConfig: SidebarConfigArray = [
    {
        text: 'Panoptic DB',
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