'use client'
import { ISvgText } from '../interfaces/post'
import styles from './decorativeHeading.module.css'

export const SvgText = ({
    title,
    fontColour
}: ISvgText) => {
    let textElements = [];
    const prepareTextElements = () => {
        let shadowLength = 8;

        for (let index = 1; index < shadowLength; index++) {
            const dxValue = `${20 - index * 3}`
            const dyValue = `${20 - index * 3}`
            //replace with useShadowColourCalculator with lch()
            const strokeValue = `${index === shadowLength - 1 ? 
                'rgb(255, 255, 255)' :
                `rgb(${93 + 15 * index}, ${67 + 15 * index}, ${223 + 15 * index})`}
                `
            const strokeDasharrayValue =  `${index === shadowLength - 1 ? '2,1' : '.01,4'}`
            const strokeWidthValue = `${index === shadowLength - 1 ? '1.5' : `${ 3 * index / 6 }`}`
            const text = 
                <text
                    x="0%" y="70%" 
                    dx= { dxValue } 
                    dy = { dyValue } 
                    font-family="Trebuchet MS" 
                    font-size="5vw"
                    stroke = { strokeValue }
                    stroke-width = { strokeWidthValue }
                    stroke-linecap="round"
                    stroke-dasharray = { strokeDasharrayValue }
                    fill="transparent"
                    text-length="100%"
                >
                    { title }
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