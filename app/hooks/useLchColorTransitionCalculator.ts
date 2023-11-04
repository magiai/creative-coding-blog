export const useLchColorTransitionCalculator = (
    firstColor: string, 
    lastColor: string,
    numberOfColors: number
) => {
    const numberOfLchValues = 3;

    const extractLchNumericValues  = (lchValue: string) => {
        const sparatedValues = lchValue.replaceAll('%', '').slice(4, -1).split(' ')
        return sparatedValues;
    }

    const firstColorValues = extractLchNumericValues(firstColor)
    const lastColorValues = extractLchNumericValues(lastColor)

    const calculateLchValuesIncrementalDifferences = () => {
        let lchValuesDifferences = []

        for (let index = 0; index < numberOfLchValues; index++) {
            const firstColorValue = Number(firstColorValues[index])
            const lastColorValue = Number(lastColorValues[index])
            const valueDifference = (firstColorValue - lastColorValue) / numberOfColors;

            lchValuesDifferences.push(valueDifference)
        }

        return lchValuesDifferences
    }

    
    const prepareTransitionedLchValues = () => {
        const lchValuesDifferences =  calculateLchValuesIncrementalDifferences();
        let newLchValues = [];

        for (let color = 0; color < numberOfColors; color++) {
            let singleLchValues = [];
            
            for (let index = 0; index < numberOfLchValues; index++) {
                const singleLchValue = Number(firstColorValues[index]) - lchValuesDifferences[index] * color;
                singleLchValues.push(singleLchValue);
            }
    
            newLchValues.push(`lch(${singleLchValues[0]}%, ${singleLchValues[1]}%, ${singleLchValues[2]})`)
        }

        return newLchValues
    }

    return prepareTransitionedLchValues();
}