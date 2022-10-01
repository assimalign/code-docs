import { SidebarConfigArray } from 'vuepress'


export const PanopticNETSidebarConfig: SidebarConfigArray = [
    {
        text: 'Panoptic NET',
        collapsible: true,
        children: [
            {
                text: 'Overview',
                link: '/panoptic-net/index.md'
            },
            {
                text: 'Fundamentals',
                link: '/panoptic-net/overview.md'
            }            
        ]
    }
]