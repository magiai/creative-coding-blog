import React from 'react'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { IDescription, IRichTextNode } from '../interfaces/post';
import { BLOCKS } from "@contentful/rich-text-types"
import { Iframe } from '@components/components/Iframe'
import { Image } from '@components/components/Image'

export default function Description({
    description 
}: IDescription) {

    const renderOptions = {
        renderNode: {
            [BLOCKS.EMBEDDED_ENTRY]: (node: IRichTextNode) => {
                const contentType = node.data.target.sys.contentType.sys.id
                const fields = node.data.target.fields

                if (contentType === "codeSnippet") {
                    return (
                        <pre className = { fields.snippetClassName }>
                            <code>{ fields.snippetCode }</code>
                        </pre>
                    );
                }
          
                if (contentType === "codepenIframe") {
                    return (
                        <Iframe 
                              title = { fields.iframeUrl.title } 
                              source = { fields.iframeUrl }
                        />
                    );
                }
            },
      
            [BLOCKS.EMBEDDED_ASSET]: (node: IRichTextNode) => {
                const fields = node.data.target.fields

                return (
                    <Image 
                          src = {`https://${fields.file.url}`}
                          alt = { fields.description }
                          height = { fields.file.details.image.height }
                          width = { fields.file.details.image.width }
                    />
                );
            },
        },
    };
 
    
    return (
        <>
            {documentToReactComponents(description, renderOptions)}
        </>
    )
}