import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { useStyling } from '@alejandro.dev/rn-themizer'
import styles, { ParamsType, StyleGuide } from './item.styles'

const ListItemRenderer: React.FC<{ label: string; active?: boolean; onSelect: () => void }> = ({
    label,
    active,
    onSelect
}) => {
    const styling = useStyling<StyleGuide, ParamsType>(styles, { active })
    return (
        <TouchableOpacity style={styling.root} onPress={onSelect}>
            <Text style={styling.label}>{label}</Text>
            <TouchableOpacity style={styling.radiusWrapper} onPress={onSelect}>
                {active && <View style={styling.radiusContent} />}
            </TouchableOpacity>
        </TouchableOpacity>
    )
}

export default ListItemRenderer
