import React from 'react'
import { View } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { StyleGuide, ParamsType } from './col.styles'

interface ColProps {
    children?: React.ReactNode
    colSize?: number
}

const Col: React.FC<ColProps> = ({ children, colSize }) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles, { colSize })
    return <View style={styling.root}>{children}</View>
}

Col.defaultProps = {
    colSize: 1
}

export default Col
