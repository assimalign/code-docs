import { SidebarConfigArray } from 'vuepress'
import { dotnetExtensionsSidebarItems } from './extensions-dotnet'
import { nodejsExtensionsSidebarItems } from './extensions-nodejs'
import { pythonExtensionsSidebarItems } from './extensions-python'

export const languageExtensionsSidebarItems: SidebarConfigArray = [
    {
        text: 'Language Extensions',
        collapsible: true,
        children: [
            ...dotnetExtensionsSidebarItems,
            ...nodejsExtensionsSidebarItems,
            ...pythonExtensionsSidebarItems
        ]
    }
]