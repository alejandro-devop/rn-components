import React from 'react'
import { Text, View, TextInput } from 'react-native'
import styles, { ParamsGiven, StyleGuide } from './styles'
import { useStyling, usePalette } from '@alejandro.dev/rn-themizer'
import { TextFieldProps } from './types'

const TextField: React.FC<TextFieldProps> = ({
    label,
    onBlur,
    onChange,
    name,
    onFocus,
    placeholder,
    secondary,
    value
}) => {
    const [focussed, setFocussed] = React.useState(false)
    const palette = usePalette()
    const styling = useStyling<StyleGuide, ParamsGiven>(styles, { focussed, secondary })

    const handleFocussed = React.useCallback(() => {
        setFocussed(true)
        if (onFocus) onFocus()
    }, [])

    const handleLostFocus = React.useCallback(() => {
        setFocussed(false)
        if (onBlur) onBlur()
    }, [])

    const handleChange = (text: string) => {
        if (onChange) {
            onChange({ name, value: text })
        }
    }

    return (
        <View style={styling.root}>
            <View style={styling.labelWrapper}>
                {label && <Text style={styling.label}>{label}</Text>}
            </View>
            <View style={styling.inputWrapper}>
                <TextInput
                    style={styling.input}
                    value={value}
                    placeholder={placeholder}
                    placeholderTextColor={palette.textField?.placeholderColor}
                    onFocus={handleFocussed}
                    onBlur={handleLostFocus}
                    onChangeText={handleChange}
                />
            </View>
        </View>
    )
}

export default TextField
