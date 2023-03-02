'use client'
import { IIframe } from '../interfaces/post'

export const Iframe = ({
    title,
    source
}:IIframe) => {
    return (
        <iframe 
            height = "550" 
            width="100%"
            title = { title }
            src = { source } 
            frameBorder="no" 
            scrolling="no"
            loading="lazy">
        </iframe>   
    )
}