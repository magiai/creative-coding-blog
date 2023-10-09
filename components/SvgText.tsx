'use client'
import { ISvgText } from '../interfaces/post'
import styles from './decorativeHeading.module.css'

export const SvgText = ({
    title,
    fontColour
}: ISvgText) => {
    let textElements = [];
    const prepareTextElements = () => {
        for (let index = 1; index < 7; index++) {
            const dxValue = `${index * 3}`
            const dyValue = `${index * 3}`
            const strokeValue = `rgb(${93 + 8 * index}, ${67 + 8 * index}, ${223 + 8 * index})`
            const text = 
                <text
                    x="0%" y="70%" 
                    dx= { dxValue } 
                    dy = { dyValue } 
                    font-family="Trebuchet MS" 
                    font-size="5vw"
                    stroke = { strokeValue }
                    stroke-width="3"
                    stroke-linecap="round"
                    stroke-dasharray=".01,4"
                    fill="transparent"
                    text-length="100%"
                >
                    I smell { title }
                </text>
            
            textElements.push(text);
        }

        return textElements
    }

    return (
        <svg  
            className = {styles.svgText} 
            xmlns="http://www.w3.org/2000/svg"
        >
            {
                prepareTextElements().map(element => {
                    return (
                        <>
                            { element }
                        </>
                    )
                })
            }
        </svg>
    )

}