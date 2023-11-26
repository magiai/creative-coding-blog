'use client'
import { ISvgText } from '../interfaces/post'
import styles from './decorativeHeading.module.css'
import '../styles/custom-font.css';
import { useLchColorTransitionCalculator } from '../app/hooks/useLchColorTransitionCalculator';

export const SvgText = ({
    title,
    firstLayerColor,
    lastLayerColor,
}: ISvgText) => {
    let textElements: SVGTextElement[] = [];
    const prepareTextElements = () => {
        let shadowLength = 8;
        const firstColor = firstLayerColor ? firstLayerColor : 'lch(76% 41 306)';
        const lastColor = lastLayerColor ? lastLayerColor : 'lch(86% 22 186)';
        const colourValues = useLchColorTransitionCalculator(firstColor, lastColor, shadowLength);

        for (let index = 1; index <= shadowLength; index++) {
            const dxValue = `${20 - index * 3}`
            const dyValue = `${20 - index * 3}`

            const strokeValue = colourValues[index - 1];
            const strokeDasharrayValue =  `${index === shadowLength ? '.2,2' : '.01,4'}`
            const strokeWidthValue = `${index === shadowLength ? '.2' : 0.025 * index}`
            const text = 
                <text
                    x="20%" y="70%" 
                    dx= { dxValue } 
                    dy = { dyValue } 
                    fontFamily="Glass Antiqua" 
                    fontSize="7vw"
                    stroke = { strokeValue }
                    strokeWidth = { strokeWidthValue }
                    strokeLinecap="round"
                    strokeDasharray = { strokeDasharrayValue }
                    fill= 'lch(42% 89 300)'
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