import Contentful from 'contentful'

export interface IBlogPostList  {
    slug: Contentful.EntryFields.Text,
    title: Contentful.EntryFields.Text,
    shortDescription: Contentful.EntryFields.Text,
}

export interface IBlogPost  {
    title: Contentful.EntryFields.Text,
    shortDescription: Contentful.EntryFields.Text,
    iframeUrl: Contentful.EntryFields.Text,
    description: Contentful.EntryFields.RichText,
    cssClass: Contentful.EntryFields.Text,
    titleFirstLayerColor?: Contentful.EntryFields.Text,
    titleLastLayerColor?: Contentful.EntryFields.Text,
}