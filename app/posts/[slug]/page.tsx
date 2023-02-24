import { contentfulClient } from '../../../lib/contentful-client'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { IBlogPost } from '@components/interfaces/blog'

export default async function BlogPost({ params }: { params: {slug: string}}) {
    const { items } = await contentfulClient.getEntries<IBlogPost>({ 
        content_type: 'blogPost',
        'fields.slug': params.slug 
    })
    const { title, iframeUrl, description } = items[0].fields

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
                    { documentToReactComponents(description) }
                </article>
            </main>
        </>
    )
}