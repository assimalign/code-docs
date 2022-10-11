<template>
  <div >
    <MarkdownHeader class="text-black">Test</MarkdownHeader>
  </div>
</template>
<script lang="ts" setup>
import MarkdownIt from 'markdown-it';
import MarkdownHeader from './markdown/MarkdownHeader.vue';

const md = new MarkdownIt()
const tokens = md.parse(`
# Header

1. a **list**

> a *quote*
`,{})

md.renderer.render(tokens)
console.log(tokens)
// tokens
// .filter((token) => token.type === 'heading_open')
// .forEach((header) => {
//   header.attrs = [
//     [
//       'class', 'text-black-200'
//     ]
//   ]
// })

// const content = md.renderer.render(tokens, md.options,{})
</script>