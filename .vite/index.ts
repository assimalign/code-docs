import type { Plugin } from "vite";
import { markdownIt as md } from "../src/services/markdownit";

const markdownIt = (options?: {}): Plugin => {
    return {
        name: 'MarkdownIt',
        enforce: 'pre',
        transform(code, id, options) {
            if (!id.endsWith('.md')) {
                return
            }
            const html = md.render(code)

            return {
                code: `<template>${html}</template>`,
                map: {
                    mappings: ''
                } as any
            }
        },
        async handleHotUpdate({ file, read, server }) {
            if (!file.endsWith('.md')) {
                return
            }
            const code = await read()
            const html = md.render(code)
            read = function () {
                return html
            }
        }
    }
}
export default markdownIt