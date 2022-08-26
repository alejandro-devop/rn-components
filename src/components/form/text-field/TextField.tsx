import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles, { ParamsGiven, StyleGuide } from './styles'
import { useStyling, usePalette } from '@alejandro.dev/rn-themizer'
import { TextFieldProps } from './types'
import Icon from '../../icon'

const TextField: React.FC<TextFieldProps> = ({
    icon,
    label,
    onBlur,
    onChange,
    name,
    onFocus,
    placeholder,
    secondary,
    value,
    actionIcon,
    isPassword,
    onActionTriggered
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
            <View style={styling.inputRow}>
                <View style={styling.inputWrapper}>
                    {icon && (
                        <View style={styling.iconWrapper}>
                            <Icon name={icon} style={styling.icon} />
                        </View>
                    )}
                    <TextInput
                        secureTextEntry={isPassword}
                        style={styling.input}
                        value={value}
                        placeholder={placeholder}
                        placeholderTextColor={palette.textField?.placeholderColor}
                        onFocus={handleFocussed}
                        onBlur={handleLostFocus}
                        onChangeText={handleChange}
                    />
                </View>
                {actionIcon && (
                    <TouchableOpacity style={styling.actionButton} onPress={onActionTriggered}>
                        <Icon name={actionIcon} style={styling.actionIcon} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default TextField
