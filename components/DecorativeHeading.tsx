'use client'

import { IDecorativeHeading } from '../interfaces/post'
import { SvgText } from './SvgText'
import styles from './decorativeHeading.module.css'

export const DecorativeHeading = ({
    title,
    headingType,
    fontColour
}: IDecorativeHeading) => {
    let heading;

    switch (headingType) {
        case 'h2': 
            heading = <h2>I smell { title } 
                        <SvgText title = { title } />
                    </h2>
            break;
        default:
            heading = <h1 className = { styles.h1 }>I smell { title }
                        <SvgText title = { title } />
                    </h1>
      }
    return (
        heading
    )
}