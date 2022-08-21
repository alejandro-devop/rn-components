import React from 'react'
import { Text, View } from 'react-native'
import { TitleProps } from './types'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsGiven, StyleGuide } from './styles'

const Title: React.FC<TitleProps> = ({ children, size }) => {
    const styling = useStyling<StyleGuide, ParamsGiven>(styles, {
        size
    })
    return (
        <View style={styling.root}>
            <Text style={styling.title}>{children}</Text>
        </View>
    )
}

Title.defaultProps = {
    size: '1'
}

export default Title
