import React from 'react'
import { View } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import { TextFieldProps } from '../text-field/types'
import TextField from '../text-field'
import IconButton from '../../icon-button/IconButton'
import FormLabel from '../form-label/FormLabel'

interface NumberPickerFieldProps {
    step?: number
    min?: number
    max?: number
}

const NumberPickerField: React.FC<TextFieldProps & NumberPickerFieldProps> = ({
    label,
    secondary,
    value,
    step = 1,
    min = 0,
    max = 1000
}) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles)
    const [counterData, setCounterData] = React.useState(parseInt(`${value}`, 10))

    const handleAdd = React.useCallback(() => {
        const newData = counterData + step
        setCounterData(newData)
    }, [counterData, setCounterData])
    const handleSubtract = React.useCallback(() => {
        const newData = counterData - step
        setCounterData(newData)
    }, [counterData, setCounterData])

    const handleInputChange = React.useCallback(({ value }: { value: any }) => {
        let newValue = parseInt(value, 10)
        if (newValue < min) {
            newValue = min
        }
        if (newValue > max) {
            newValue = max
        }
        setCounterData(newValue)
    }, [])

    return (
        <View style={styling.root}>
            <FormLabel primary secondary={secondary}>
                {label}
            </FormLabel>
            <View style={styling.inputWrapper}>
                <IconButton
                    disabled={counterData <= min}
                    icon="minus"
                    onPress={handleSubtract}
                    variant="primary"
                />
                <View style={styling.inputInnerWrapper}>
                    <TextField
                        value={`${counterData}`}
                        keyboardType="number-pad"
                        onChange={handleInputChange}
                    />
                </View>
                <IconButton
                    disabled={counterData >= max}
                    icon="add"
                    onPress={handleAdd}
                    variant="primary"
                />
            </View>
        </View>
    )
}

NumberPickerField.defaultProps = {
    step: 1,
    value: '0',
    min: 0,
    max: 1000
}

export default NumberPickerField
