import { Inter } from '@next/font/google'
import styles from './page.module.css'
import Link from 'next/link'
import { contentfulClient } from '../lib/contentful-client'
import { IBlogPostList } from '@components/interfaces/contentfulEntry'
import { DecorativeHeading } from '@components/components/DecorativeHeading'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
    const response = await contentfulClient.getEntries<IBlogPostList>({ 
        content_type: 'blogPost' 
    })
    const blogPostsList = response.items

    return (
        <>
            <header className = { styles.header }>
                <DecorativeHeading 
                    title = { 'I Spy Fantasy' }
                    headingType = 'h1'
                />  
            </header>
            <main className={styles.main}>
                <ul className = { styles.postList }>
                    {
                        blogPostsList.map(blogPostListItem => {
                            const {slug, title, shortDescription} = blogPostListItem?.fields
                            
                            return (
                                <li key = { blogPostListItem?.sys?.id }>
                                    <Link href={`posts/${slug}`}>
                                        <h2>{ title }</h2>
                                        <p>{ shortDescription }</p>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </main>
        </>
    )
}
