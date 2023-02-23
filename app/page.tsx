import { Inter } from '@next/font/google'
import styles from './page.module.css'
import { contentfulClient } from '../lib/contentful-client'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const response = await contentfulClient.getEntries({ content_type: 'blogPost' })
  const blogPosts = response.items

  return (
    <>
      <header>
        <h1>Creative Coding</h1>
      </header>
      <main className={styles.main}>
        <ul>
          {
            blogPosts.map(blogPost => {
              return (
                <li key = { blogPost?.sys?.id }>
                  <Link href={`posts/${blogPost?.fields?.slug}`}>
                    <h2>{ blogPost?.fields?.title }</h2>
                    <iframe 
                      height = "500" 
                      title = { blogPost?.fields?.title }
                      src = { blogPost?.fields?.iframeUrl } 
                      frameBorder="no" 
                      loading="lazy" 
                      allowtransparency="true" 
                      allowfullscreen="true">
                    </iframe>
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
