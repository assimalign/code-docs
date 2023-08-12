import MarkdownIt from "markdown-it"

export const markdownIt = new MarkdownIt()
    .use((markdown) => {
        markdown.core.ruler.push('styling', (state) => {
            state.tokens.forEach((token) => {
                if (token.type === 'heading_open') {
                    token.attrSet('class', 'text-large')                    
                }

                console.log(token)
            })
        })
    })