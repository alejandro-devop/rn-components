import React from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import styles, { ParamsGiven, StyleGuide } from './styles'
import { useStyling, usePalette } from '@alejandro.dev/rn-themizer'
import { TextFieldProps } from './types'
import Icon from '../../icon'
import FormLabel from '../form-label'

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
    onActionTriggered,
    onlyMask,
    onPress,
    keyboardType,
    ...otherProps
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
    const WrapperComponent: any = onlyMask && onPress ? TouchableOpacity : View
    return (
        <View style={styling.root}>
            {label && (
                <FormLabel primary secondary={secondary}>
                    {label}
                </FormLabel>
            )}
            <View style={styling.inputRow}>
                <WrapperComponent style={styling.inputWrapper} onPress={onPress}>
                    {icon && (
                        <View style={styling.iconWrapper}>
                            <Icon name={icon} style={styling.icon} />
                        </View>
                    )}
                    {!onlyMask ? (
                        <TextInput
                            secureTextEntry={isPassword}
                            style={styling.input}
                            value={value}
                            placeholder={placeholder}
                            placeholderTextColor={palette.textField?.placeholderColor}
                            onFocus={handleFocussed}
                            onBlur={handleLostFocus}
                            onChangeText={handleChange}
                            keyboardType={keyboardType}
                            {...otherProps}
                        />
                    ) : (
                        <Text style={styling.maskedValue}>{value}</Text>
                    )}
                </WrapperComponent>
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
