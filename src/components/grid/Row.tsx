import React, { useContext } from 'react'
import { View } from 'react-native'
import GridConfiguratorContext from './GridConfiguratorContext'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { StyleGuide, ParamsType } from './row.styles'

interface RowProps {
    children: React.ReactNode
}

const Row: React.FC<RowProps> = ({ children }) => {
    const { rowMargin } = useContext(GridConfiguratorContext)
    const styling = useStyling<StyleGuide, ParamsType>(styles, { rowMargin })
    return <View style={styling.root}>{children}</View>
}

export default Row
