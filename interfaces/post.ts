import Contentful from 'contentful'
import { Document } from "@contentful/rich-text-types";

export interface IAsset {
    node: Contentful.Asset;
}

export interface IDecorativeHeading {
    title: string;
    headingType: string;
    fontColour?: string; 
}

export interface IDescription {
    description: Document;
}

export interface IIframe {
    title: string;
    source: string;
}

export interface IImage {
    src: string;
    alt: string; 
    height: number;
    width: number;
}

export interface IRichTextNode {
    data: {
        target: {
            fields: {
                title: string;
                description: string;
                file: {
                    url: string;
                    details: {
                        size?: number;
                        image: {
                            width: number;
                            height: number;
                        };
                    };
                    fileName: string;
                    contentType: string;
                };
                iframeUrl: string;
                snippetClassName: string;
                snippetCode: string;
            }
            
            sys: {
                contentType: Contentful.ContentType
            } 
        }
    };
    content: Contentful.RichTextContent[];
    nodeType: Contentful.RichTextNodeType;
}

export interface ISvgText {
    title: string,
    fontColour?: string,
}