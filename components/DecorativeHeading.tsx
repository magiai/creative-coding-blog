'use client'

import { IDecorativeHeading } from '../interfaces/post'
import { SvgText } from './SvgText'
import styles from './decorativeHeading.module.css'

export const DecorativeHeading = ({
    title,
    headingType,
    firstLayerColor,
    lastLayerColor,
}: IDecorativeHeading) => {
    let heading;

    switch (headingType) {
        case 'h2': 
            heading = <h2>I smell { title } 
                        <SvgText 
                            title = { title } 
                            firstLayerColor = { firstLayerColor } 
                            lastLayerColor = { lastLayerColor } />
                    </h2>
            break;
        default:
            heading = <h1 className = { styles.h1 }>
                        <SvgText 
                             title = { title } 
                             firstLayerColor = { firstLayerColor } 
                             lastLayerColor = { lastLayerColor } />
                    </h1>
      }
    return (
        heading
    )
}