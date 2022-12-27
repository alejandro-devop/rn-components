import React from 'react'
import { View, TouchableOpacity } from 'react-native'
import styles, { ParamsGiven, StyleGuide } from './styles'
import { useStyling } from '@alejandro.dev/rn-themizer'
import FormLabel from '../form-label'
import Icon from '../../icon'

interface CheckBoxFieldProps {
    label?: string
    checked?: boolean
    primary?: boolean
    secondary?: boolean
    onPress?: () => void
}

const CheckBoxField: React.FC<CheckBoxFieldProps> = ({
    label,
    checked,
    primary,
    secondary,
    onPress
}) => {
    const styling = useStyling<StyleGuide, ParamsGiven>(styles, { primary, secondary })
    return (
        <View style={styling.root}>
            <TouchableOpacity style={styling.controlWrapper} onPress={onPress}>
                {checked && <Icon name="check" style={styling.controlIcon} />}
            </TouchableOpacity>
            <TouchableOpacity onPress={onPress}>
                <FormLabel spacingBottom={false}>{label}</FormLabel>
            </TouchableOpacity>
        </View>
    )
}

export default CheckBoxField
