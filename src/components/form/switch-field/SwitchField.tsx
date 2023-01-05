import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import FormLabel from '../form-label/FormLabel'

interface SwitchFieldProps {
    label?: string
    checked?: boolean
    primary?: boolean
    secondary?: boolean
    onPress?: () => void
}

const SwitchField: React.FC<SwitchFieldProps> = ({
    label,
    checked,
    onPress,
    primary,
    secondary
}) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles, {
        checked,
        controlSize: 34,
        primary,
        secondary
    })
    return (
        <View style={styling.root}>
            <TouchableOpacity style={styling.controlWrapper} onPress={onPress}>
                <View style={styling.controlIcon} />
            </TouchableOpacity>
            <FormLabel spacingBottom={false}>{label}</FormLabel>
        </View>
    )
}

export default SwitchField
