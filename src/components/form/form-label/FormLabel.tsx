import React from 'react'
import { View } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './styles'
import Text from '../../text'

interface FormLabelProps {
    children?: string
    primary?: boolean
    secondary?: boolean
    spacingBottom?: boolean
}

const FormLabel: React.FC<FormLabelProps> = ({ children, primary, secondary }) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles, { primary, secondary })
    return (
        <View style={styling.labelWrapper}>
            {children && <Text style={styling.label}>{children}</Text>}
        </View>
    )
}

FormLabel.defaultProps = {
    spacingBottom: true
}

export default FormLabel
