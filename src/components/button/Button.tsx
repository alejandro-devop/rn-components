import React from 'react'
import { TouchableOpacity, View, Text } from 'react-native'
import { ButtonProps } from './types'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsGiven, StyleGuide } from './styles'

const Button: React.FC<ButtonProps> = ({ children, disabled, onPress, variant, color }) => {
    const styling = useStyling<StyleGuide, ParamsGiven>(styles, {
        disabled,
        variant,
        color
    })
    if (disabled) {
        return (
            <View style={styling.root}>
                <Text style={styling.text}>{children}</Text>
            </View>
        )
    }
    return (
        <TouchableOpacity onPress={onPress} style={styling.root}>
            <Text style={styling.text}>{children}</Text>
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    variant: 'default'
}

export default Button
