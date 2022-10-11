<template>
    <template v-for="token in tokens">

    </template>
</template>
<script lang="ts" setup>
import MarkdownIt from 'markdown-it';
import Token from 'markdown-it/lib/token'

const markdown = new MarkdownIt()
const tokens = markdown.parse('', {})


const tokenTypes = {
    headerOpen: 'heading_open',
    headerClose: 'heading_close',
}


tokens.forEach((token, index)=>{

    token.type === tokenTypes.headerOpen
})

const formatter = (tokens: Token[]) => {
    
}
</script>