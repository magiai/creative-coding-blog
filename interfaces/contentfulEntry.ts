import Contentful from 'contentful'

export interface IBlogPostList  {
    slug: Contentful.EntryFields.Text,
    title: Contentful.EntryFields.Text,
    shortDescription: Contentful.EntryFields.Text,
}

export interface IBlogPost  {
    iframeUrl: Contentful.EntryFields.Text,
    title: Contentful.EntryFields.Text,
    description: Contentful.EntryFields.RichText,
}