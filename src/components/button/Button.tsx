import React from 'react'
import { TouchableOpacity, View, Text, ActivityIndicator } from 'react-native'
import { ButtonProps } from './types'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsGiven, StyleGuide } from './styles'
import Icon from '../icon'

/**
 * Renders a button component and allows the user to interacts with it.
 * @author Alejandro Quiroz <alejandro.devop@gmail.com>
 * @version 1.0.0
 * @since 0.0.1
 * @param param0
 * @returns
 */
const Button: React.FC<ButtonProps> = ({
    children,
    disabled,
    onPress,
    iconPlacement,
    icon,
    rounded,
    variant,
    color,
    loading,
    loadingText
}) => {
    const styling = useStyling<StyleGuide, ParamsGiven>(styles, {
        disabled,
        variant,
        color,
        rounded
    })
    if (loading) {
        return (
            <View style={styling.root}>
                {loadingText && <Text style={styling.text}>{loadingText}</Text>}
                <ActivityIndicator style={styling.loader} />
            </View>
        )
    }
    if (disabled) {
        return (
            <View style={styling.root}>
                {icon && iconPlacement === 'left' && <Icon name={icon} style={styling.icon} />}
                <Text style={styling.text}>{children}</Text>
                {icon && iconPlacement === 'right' && <Icon name={icon} style={styling.icon} />}
            </View>
        )
    }
    return (
        <TouchableOpacity onPress={onPress} style={styling.root}>
            {icon && iconPlacement === 'left' && <Icon name={icon} style={styling.icon} />}
            <Text style={styling.text}>{children}</Text>
            {icon && iconPlacement === 'right' && <Icon name={icon} style={styling.icon} />}
        </TouchableOpacity>
    )
}

Button.defaultProps = {
    variant: 'default',
    iconPlacement: 'right'
}

export default Button
