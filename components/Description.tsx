import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { Document } from "@contentful/rich-text-types";
import { IIDescription } from '../interfaces/post';
import { BLOCKS, INLINES } from "@contentful/rich-text-types"
import { Iframe } from '@components/components/Iframe'
import styles from './post.module.css'

export default function Description({
     description 
}: IIDescription) {

    const renderOptions = {
        renderNode: {
          [INLINES.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "blogPost") {
              return (
                <a href={`/blog/${node.data.target.fields.slug}`}>            
                    {node.data.target.fields.title}
                </a>
              );
            }
          },
          [BLOCKS.EMBEDDED_ENTRY]: (node, children) => {
            // target the contentType of the EMBEDDED_ENTRY to display as you need
            if (node.data.target.sys.contentType.sys.id === "codeSnippet") {
              return (
                <pre className={node.data.target.fields.snippetClassName}>
                  <code>{node.data.target.fields.snippetCode}</code>
                </pre>
              );
            }
      
            if (node.data.target.sys.contentType.sys.id === "codepenIframe") {
              return (
                <Iframe 
                    title = { node.data.target.fields.iframeUrl.title } 
                    source = { node.data.target.fields.iframeUrl }
                />
              );
            }
          },
      
          [BLOCKS.EMBEDDED_ASSET]: (node, children) => {
            // render the EMBEDDED_ASSET as you need
            return (
              <img
                src={`https://${node.data.target.fields.file.url}`}
                height={node.data.target.fields.file.details.image.height}
                width={node.data.target.fields.file.details.image.width}
                alt={node.data.target.fields.description}
              />
            );
          },
        },
      };
 
    
    return (
        <>
        
            <div>
                {documentToReactComponents(description, renderOptions)}
            </div>
        </>
    )
}