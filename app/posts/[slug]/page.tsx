import React from 'react'
import { contentfulClient } from '../../../lib/contentful-client'
import { IBlogPost } from '../../../interfaces/contentfulEntry'
import { Iframe } from '@components/components/Iframe'
import { DecorativeHeading } from '@components/components/DecorativeHeading'
import  Description from '@components/components/Description'
import styles from './post.module.css'


export default async function BlogPost({ params }: { params: {slug: string}}) {
    const { items } = await contentfulClient.getEntries<IBlogPost>({ 
        content_type: 'blogPost',
        limit: 1,
        include: 10,
        'fields.slug': params.slug 
    })

    const { 
        cssClass, 
        title, 
        titleFirstLayerColor,
        titleLastLayerColor,
        shortDescription,
        iframeUrl, 
        description 
    } = items[0].fields

    return (
        <>
            <header className = { styles.postHeader }>
                <DecorativeHeading 
                    title = { title }
                    headingType = 'h1'
                    firstLayerColor = { titleLastLayerColor } 
                    lastLayerColor = { titleFirstLayerColor } 
                />
                <time dateTime="2023-02-23"></time>
            </header>
            <main className={ cssClass }>

                <article className = { styles.article }>
                    <header>{ shortDescription }</header>

                    { iframeUrl &&
                        <Iframe title = { title } source = { iframeUrl }/>
                    }

                    <Description description = { description } />
                </article>
            </main>
        </>
    )
}