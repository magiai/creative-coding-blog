import { createClient } from 'contentful'
// console.log(process.env);
export const contentfulClient = createClient({
    space: process.env.CONTENTFUL_SPACE_ID || "",
    accessToken: process.env.CONTENTFUL_ACCESS_KEY || "",
})