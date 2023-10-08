'use client'
import { IImage } from '../interfaces/post'

export const Image = ({
    src,
    alt,
    height,
    width
}: IImage) => {
    return (
        <img
            src = { src }
            alt = { alt }
            height = { height }
            width = { width }
        />
    )
}