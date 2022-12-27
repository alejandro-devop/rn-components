import React, { useContext } from 'react'
import { View } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import GridConfiguratorContext from './GridConfiguratorContext'
import styles, { StyleGuide, ParamsType } from './grid.styles'

interface GridWraapperProps {
    children: React.ReactNode
}

const GridWraapper: React.FC<GridWraapperProps> = ({ children }) => {
    const { contentPadding } = useContext(GridConfiguratorContext)
    const styling = useStyling<StyleGuide, ParamsType>(styles, { contentPadding })
    return <View style={styling.root}>{children}</View>
}

export default GridWraapper
