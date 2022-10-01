import { SidebarConfigArray } from 'vuepress'


export const PanopticNETSidebarConfig: SidebarConfigArray = [
    {
        text: 'Panoptic NET',
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