/// <reference types="vite/client" />

declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
  }
  
//   interface ImportMetaEnv {
//     readonly APP_TITLE: string
//     // more env variables...
//   }
  
//   interface ImportMeta {
//     readonly env: ImportMetaEnv
//   }