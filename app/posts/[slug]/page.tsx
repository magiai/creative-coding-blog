import React, { createElement } from 'react'
import { contentfulClient } from '../../../lib/contentful-client'
import { IBlogPost } from '@components/interfaces/blog'

export default async function BlogPost({ params }: { params: {slug: string}}) {
    const { items } = await contentfulClient.getEntries<IBlogPost>({ 
        content_type: 'blogPost',
        'fields.slug': params.slug 
    })
    const { title, iframeUrl, description } = items[0].fields
    let descriptionArray: Array<JSX.Element> = []

    const assignToHtmlElement = (content: string) => {
        const paragraph = createElement("p", {}, content)
        const codeSnippet = <pre dangerouslySetInnerHTML={{__html: content}} />
        let htmlContainer = content?.includes('class="language') ? codeSnippet : paragraph

        return htmlContainer
    }

    description?.content?.map(texts => {
        texts?.content?.map(text => {
            const content = assignToHtmlElement(text.value)
            descriptionArray.push(content) 
        })
        return descriptionArray
    })

    return (
        <>
            <header>
                <h1>{ title }</h1>
                <time dateTime="2023-02-23"></time>
            </header>
            <main>
                <article>
                    <iframe 
                        height = "500" 
                        width="100%"
                        title = { title }
                        src = { iframeUrl } 
                        frameBorder="no" 
                        loading="lazy">
                    </iframe>
                    { descriptionArray.map(content => {
                        return (
                            <>
                                {content}
                            </>
                        )
                    }) }
                </article>
            </main>
        </>
    )
}