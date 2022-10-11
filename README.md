



# Overview
This project is a starter template for 


```powershell
$directories = 
    './src', 
    './src/components', 
    './src/assets', 
    './src/views', 
    './src/routing', 
    './src/services'

$files = 
    './package.json',
    './index.html',
    './src/App.vue',
    './src/routing/routes.ts',
    './src/index.css',
    './src/main.ts',
    './src/vite-env.d.ts',
    './src/.env.dev',
    './src/.env.qa',
    './src/.env.uat',
    './src/.env.prd'

new-item $directories -itemtype directory
new-item $files -itemtype file

npm i vue@latest vue-router@latest tailwindcss@latest postcss@latest typescript@latest @vitejs/plugin-vue@latest autoprefixer@latest vite@latest

````