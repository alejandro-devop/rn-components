import React from 'react'
import { Text, View } from 'react-native'
import styles, { ParamsGiven, StyleGuide } from './styles'
import { useStyling } from '@alejandro.dev/rn-themizer'

const CheckBoxField: React.FC = () => {
    const styling = useStyling<StyleGuide, ParamsGiven>(styles)

    return (
        <View style={styling.root}>
            <Text>CheckBoxField</Text>
        </View>
    )
}

export default CheckBoxField
